import { FieldType } from '../Zustand store data/MainFlow/flow';

export type DBFlowSection = {
  id: string;
  sectiontitle: string;
  firstfield: string;
  nextnode: string;
  form_id: string;
  order_index?: number;
  starting_node: string;
  requiremnents?: { [key: string]: string };
  injection_name?: string;
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
  flowinjection?: FlowInjection;
  extractiontype: string;
  nextfield?: string | null; // ✅ added because `goToNextMainField` expects this
  form_id: string;
};

export type DBCurrentStates = {
  current_main_flow_section_id?: string | null;
  current_main_flow_field_id?: string | null;

  current_injected_flow_section_id?: string | null;
  current_injected_flow_field_id?: string | null;

  current_chartform_id?: string | null;

  is_flow_func?: boolean | null;
  flow_type?: string | null;

  sidebar_index?: number;

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
  answers?: DBchartFormAnswer | null;
  form_id: string;
  starting_node?: string | null;
};

export type DBresponse = {
  // id: string,
  // created_at: string | null,
  field_id: string | null;
  stage_field_id: string | null;
  user_id: string;
  response: string;
};

export type Dbdependencies = {
  investment_stage?: string;
  //If i want to add another dependency i add them here
};

export type InternalDependency = {
  table: string;
  column: string;
  conditions: Array<{
    field: string;
    operator: '=' | '!=' | 'is' | 'not';
    value: string | number | null | '$user_id';
  }>;
};

export type Dependency = {
  internal?: InternalDependency;
  external?: Record<string, never>; // currently empty, can extend later
};

export type FlowInjection = {
  name: string;
  type: 'OriginalSubFlow' | 'ChartForm';
  dependencies: Record<string, Dependency>;
};

export type Users = {
  user_id: string;
  username: string;
  email: string;
  password: string;
  time_created: string;
};
