import { createClient } from '@/utils/supabase/client';
import { UUID } from 'crypto';

// Initialize Supabase client
const supabaseUrl = 'https://ebobswoijxoostgzdpse.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVib2Jzd29panhvb3N0Z3pkcHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2NzA0MTAsImV4cCI6MjA3MTI0NjQxMH0.Uth5LGEIwBzYx7DQ0ofnHFtkKePV100cGWsATs5VS08';
const supabase = createClient();

// Define a TypeScript type for a section
export type DBFlowSection = {
  sectionid: string;
  sectiontitle: string;
  firstfield: string | null;
  nextnode: string | null;
};

// Function to fetch all sections
export async function getAllMainSections(): Promise<DBFlowSection[]> {
  const { data, error } = await supabase.from('main_flow_sections').select('*');

  if (error) {
    console.error('Error fetching fields:', error.message);
    return [];
  }

  console.log('this is the sections extracted main sections: ', data);
  return data || [];
}

export async function getAllMainFields(): Promise<DBFlowSection[]> {
  const { data, error } = await supabase.from('main_flow_fields').select('*');

  if (error) {
    console.error('Error fetching main fields:', error.message);
    return [];
  }

  console.log('this is the sections extracted main fields: ', data);
  return data || [];
}

export async function getSpecificMainField(
  sectionId: string,
  fieldId: string,
): Promise<DBFlowSection[]> {
  const { data, error } = await supabase
    .from('main_flow_fields')
    .select('*')
    .eq('sectionId', sectionId)
    .eq('fieldId', fieldId);

  if (error) {
    console.error('Error fetching main fields:', error.message);
    return [];
  }

  console.log('this is the sections extracted main fields:', data);
  return data || [];
}

export async function getSpecificMainSection(
  sectionId: string,
): Promise<DBFlowSection[]> {
  const { data, error } = await supabase
    .from('main_flow_sections')
    .select('*')
    .eq('sectionId', sectionId);

  if (error) {
    console.error('Error fetching main section:', error.message);
    return [];
  }

  console.log('this is the sections extracted main section:', data);
  return data || [];
}
