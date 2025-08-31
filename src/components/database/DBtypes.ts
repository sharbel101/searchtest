import { FieldType } from '../Zustand store data/MainFlow/flow';

export type DBFlowSection = {
  id: string;
  sectiontitle: string;
  firstfield: string;
  nextnode: string;
  form_id: string;
};

export type DBFlowField = {
  id: string;
  sectionid: string;
  type: FieldType;
  label: string;
  placeholder: string;
  description: string;
  required: boolean;
  validation: string;
  options: Record<string, string>;
  flowinjection: { name: string; type: string };
  extractiontype: string;
  nextfield?: string | null; // ✅ added because `goToNextMainField` expects this
};

export type DBCurrentStates = {
  user_id: string;

  current_main_flow_section_id: string;
  current_main_flow_field_id: string;

  current_injected_flow_section_id: string;
  current_injected_flow_field_id: string;

  current_chartform_id: string | null;

  is_flow_func: boolean;
  flow_type: string | null;

  stage: string | null;

  updated_at?: string;
};
