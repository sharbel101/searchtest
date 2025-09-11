import { createClient } from '@/utils/supabase/client';
import {
  DBFlowSection,
  DBFlowField,
  DBCurrentStates,
} from '@/components/database/DBtypes';
import { getCurrentState, setCurrentState } from './mainFlowDBfunc';

const supabase = createClient();

// ---------- Queries ----------

// Fetch all sections
export async function getAllInjectedSections(): Promise<DBFlowSection[]> {
  const { data, error } = await supabase
    .from('injected_flow_sections')
    .select('*');

  if (error) {
    console.error('Error fetching injected sections:', error.message);
    return [];
  }

  return data ?? [];
}

// Fetch all fields
export async function getAllInjectedFields(): Promise<DBFlowField[]> {
  const { data, error } = await supabase
    .from('injected_flow_fields')
    .select('*');

  if (error) {
    console.error('Error fetching injected fields:', error.message);
    return [];
  }

  return data ?? [];
}

// Fetch a specific field
export async function getSpecificInjectedField(
  sectionId: string,
  fieldId: string,
): Promise<DBFlowField | null> {
  const { data, error } = await supabase
    .from('injected_flow_fields')
    .select('*')
    .eq('sectionid', sectionId)
    .eq('id', fieldId)
    .single();

  if (error) {
    console.error('Error fetching injected field:', error.message);
    return null;
  }

  return data;
}

// Fetch a specific section
export async function getSpecificInjectedSection(
  sectionId: string,
): Promise<DBFlowSection | null> {
  const { data, error } = await supabase
    .from('injected_flow_sections')
    .select('*')
    .eq('id', sectionId)
    .single();

  if (error) {
    console.error('Error fetching injected section:', error.message);
    return null;
  }

  return data;
}

export async function getCurrentInjectedField(
  user_id: string,
): Promise<DBFlowField | null> {
  const current_state = await getCurrentState(user_id);
  if (!current_state) {
    console.warn("can't access a current state!");
    return null;
  }

  if (
    !current_state.current_injected_flow_section_id ||
    !current_state.current_injected_flow_field_id
  ) {
    console.warn('Missing section_id or field_id in current state');
    return null;
  }

  const current_field = await getSpecificInjectedField(
    current_state.current_injected_flow_section_id,
    current_state.current_injected_flow_field_id,
  );
  if (!current_field) {
    console.warn("can't access the current injected field!");
    return null;
  }

  return current_field;
}

export async function getCurrentInjectedSection(
  user_id: string,
): Promise<DBFlowSection | null> {
  const current_state = await getCurrentState(user_id);
  if (!current_state) {
    console.warn("can't access a current state!");
    return null;
  }

  if (
    !current_state.current_injected_flow_section_id ||
    !current_state.current_injected_flow_field_id
  ) {
    console.warn('Missing section_id or field_id in current state');
    return null;
  }

  const current_section = await getSpecificInjectedSection(
    current_state.current_injected_flow_section_id,
  );
  if (!current_section) {
    console.warn("can't access the current injected field!");
    return null;
  }

  return current_section;
}

// ---------- Flow Navigation ----------

export async function goToNextInjectedField(user_id: string) {
  const current_state = await getCurrentState(user_id);
  if (!current_state) return null;

  if (
    !current_state.current_injected_flow_section_id ||
    !current_state.current_injected_flow_field_id
  ) {
    console.warn('Missing section_id or field_id in current state');
    return null;
  }

  const currentField = await getSpecificInjectedField(
    current_state.current_injected_flow_section_id,
    current_state.current_injected_flow_field_id,
  );

  if (!currentField || !currentField.nextfield) {
    console.warn('No next field found.');
    return null;
  }

  const nextField = await getSpecificInjectedField(
    current_state.current_injected_flow_section_id,
    currentField.nextfield,
  );

  if (nextField) {
    await setCurrentState({
      user_id,
      current_injected_flow_field_id: nextField.id,
    });
  }

  return nextField;
}

export async function goToNextInjectedSection(user_id: string) {
  const current_state = await getCurrentState(user_id);
  if (!current_state) return null;

  if (!current_state.current_injected_flow_section_id) {
    console.warn('Missing section_id or field_id in current state');
    return null;
  }

  const currentSection = await getSpecificInjectedSection(
    current_state.current_injected_flow_section_id,
  );

  if (!currentSection || !currentSection.nextnode) {
    console.warn('No next field found.');
    return null;
  }

  const nextSectionId = currentSection.nextnode;

  const nextSection = await getSpecificInjectedSection(nextSectionId);

  if (nextSection) {
    await setCurrentState({
      user_id,
      current_injected_flow_section_id: nextSectionId,
      current_injected_flow_field_id: nextSection.firstfield,
    });
  }

  return nextSection;
}
