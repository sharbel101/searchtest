import { createClient } from '@/utils/supabase/client';
import {
  DBFlowSection,
  DBFlowField,
  DBCurrentStates,
} from '@/components/database/DBtypes';
import next from 'next';

const supabase = createClient();

// ---------- Queries ----------

// Fetch all sections
export async function getAllMainSections(): Promise<DBFlowSection[]> {
  const { data, error } = await supabase.from('main_flow_sections').select('*');

  if (error) {
    console.error('Error fetching main sections:', error.message);
    return [];
  }

  return data ?? [];
}

// Fetch all fields
export async function getAllMainFields(
  section_id: string,
): Promise<DBFlowField[]> {
  const { data, error } = await supabase
    .from('main_flow_fields')
    .select('*')
    .eq('sectionid', section_id);

  if (error) {
    console.error('Error fetching main fields:', error.message);
    return [];
  }

  return data ?? [];
}

// Fetch a specific field
export async function getSpecificMainField(
  sectionId: string,
  fieldId: string,
): Promise<DBFlowField | null> {
  const { data, error } = await supabase
    .from('main_flow_fields')
    .select('*')
    .eq('sectionid', sectionId)
    .eq('id', fieldId)
    .single();

  if (error) {
    console.error('Error fetching main field:', error.message);
    return null;
  }

  return data;
}

// Fetch a specific section
export async function getSpecificMainSection(
  sectionId: string,
): Promise<DBFlowSection | null> {
  const { data, error } = await supabase
    .from('main_flow_sections')
    .select('*')
    .eq('id', sectionId)
    .single();

  if (error) {
    console.error('Error fetching main section:', error.message);
    return null;
  }

  return data;
}

// Fetch current state
export async function getCurrentState(
  user_id: string,
): Promise<DBCurrentStates | null> {
  const { data, error } = await supabase
    .from('current_states')
    .select('*')
    .eq('user_id', user_id)
    .single();

  if (error) {
    console.error('Error fetching current state:', error.message);
    return null;
  }

  return data;
}

// Upsert current state
export async function setCurrentState(
  state: Partial<DBCurrentStates> & { user_id: string },
) {
  try {
    const { data, error } = await supabase
      .from('current_states')
      .upsert({
        ...state,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error setting current state:', error);
    throw error;
  }
}

export async function getCurrentMainField(
  user_id: string,
): Promise<DBFlowField | null> {
  const current_state = await getCurrentState(user_id);
  if (!current_state) {
    console.warn("can't access a current state!");
    return null;
  }

  const current_field = await getSpecificMainField(
    current_state.current_main_flow_section_id,
    current_state.current_main_flow_field_id,
  );
  if (!current_field) {
    console.warn("can't access the current main field!");
    return null;
  }

  return current_field;
}

export async function getCurrentMainSection(
  user_id: string,
): Promise<DBFlowSection | null> {
  const current_state = await getCurrentState(user_id);
  if (!current_state) {
    console.warn("can't access a current state!");
    return null;
  }

  const current_section = await getSpecificMainSection(
    current_state.current_main_flow_section_id,
  );
  if (!current_section) {
    console.warn("can't access the current main field!");
    return null;
  }

  return current_section;
}

// ---------- Flow Navigation ----------

export async function goToNextMainField(user_id: string) {
  const current_state = await getCurrentState(user_id);

  if (!current_state) return null;

  const currentField = await getSpecificMainField(
    current_state.current_main_flow_section_id,
    current_state.current_main_flow_field_id,
  );

  if (!currentField || !currentField.nextfield) {
    console.warn('No next field found.');
    return null;
  }

  const nextField = await getSpecificMainField(
    current_state.current_main_flow_section_id,
    currentField.nextfield,
  );

  if (nextField) {
    await setCurrentState({
      user_id,
      current_main_flow_field_id: nextField.id,
    });
  }

  //this peace of code will jumps to the next section if we reached the last field in a section
  if (!nextField || nextField === null || nextField === undefined) {
    goToNextMainSection(user_id);
    return null;
  }

  return nextField;
}

export async function goToNextMainSection(user_id: string) {
  const current_state = await getCurrentState(user_id);
  if (!current_state) return null;

  const currentSection = await getSpecificMainSection(
    current_state.current_main_flow_section_id,
  );

  if (!currentSection || !currentSection.nextnode) {
    console.warn('No next field found.');
    return null;
  }

  const nextSectionId = currentSection.nextnode;

  const nextSection = await getSpecificMainSection(nextSectionId);

  if (nextSection) {
    await setCurrentState({
      user_id,
      current_main_flow_section_id: nextSection.id,
      current_main_flow_field_id: nextSection.firstfield,
    });
  }

  return nextSection;
}
