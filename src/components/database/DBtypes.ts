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
  options?: Record<string, string>;
  flowinjection?: { name: string; type: string };
  extractiontype: string;
  nextfield?: string | null; // ✅ added because `goToNextMainField` expects this
  form_id: string;
};

export type DBCurrentStates = {
  user_id: string;

  current_main_flow_section_id?: string | null;
  current_main_flow_field_id?: string | null;

  current_injected_flow_section_id?: string | null;
  current_injected_flow_field_id?: string | null;

  current_chartform_id?: string | null;

  is_flow_func?: boolean | null;
  flow_type?: string | null;

  stage?: string | null;

  updated_at?: string | null;
};

export type BranchTarget = {
  next?: string;
  setStage?: string;
};

export type DBchartFormAnswer = Record<string, BranchTarget>;

export type DBchartFlowField = {
  id: string;
  question: string;
  answer?: DBchartFormAnswer | null;
  form_id: string;
  starting_node?: string | null;
};
