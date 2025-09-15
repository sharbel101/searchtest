//'use client';

import { createClient } from '@/utils/supabase/client';
import {
  getCurrentMainField,
  setCurrentState,
} from '../database/mainFlowDBfunc';

const { setIsInFlowFunc } = useMainDBFlowStore.getState();

const supabase = createClient();

//only for development purposes
import { user_id } from './constructor';

import { DBFlowSection } from '@/components/database/DBtypes';
import { useMainDBFlowStore } from '../database/zustand_containers/MainFlowStore';

//IS
export const fetchAndSetChartFormSubFlow = async (
  flowName: string,
): Promise<boolean> => {
  const { data, error } = await supabase
    .from('chartform_flow')
    .select('*')
    .not('starting_node', 'is', null)
    .single();
  if (error) {
    console.error(
      'Error fetching starting nodes from the chartForm flow:',
      error,
    );
  } else {
    console.log('Rows with starting_node:', data);
  }

  if (!data) {
    return false;
  }

  const field = await getCurrentMainField(user_id);
  if (!field) {
    console.warn('No field provided to define the type of the injection.');
  }

  const state = await setCurrentState({
    user_id: user_id,
    is_flow_func: true,
    current_chartform_id: data.id,
    flow_type: field?.flowinjection?.type,
  });
  setIsInFlowFunc(true);

  return true;
};

//fs
export const fetchAndSetOriginalSubFlow = async (
  injection_name: string,
  stage: string,
): Promise<boolean> => {
  const { data, error } = await supabase
    .from('injected_flow_sections')
    .select('*')
    .eq('injection_name', injection_name)
    .eq('stage', stage)
    .single();

  if (error) {
    console.error('Error fetching:', error);
  } else {
    console.log('Rows with starting_node:', data);
  }

  if (!data) {
    return false;
  }

  const DBdata: DBFlowSection = data;

  const field = await getCurrentMainField(user_id);
  if (!field) {
    console.warn('No field provided to define the type of the injection.');
  }

  const state = await setCurrentState({
    user_id: user_id,
    current_injected_flow_section_id: DBdata.id,
    current_injected_flow_field_id: DBdata.firstfield,
    is_flow_func: true,
    flow_type: field?.flowinjection?.type,
  });
  setIsInFlowFunc(true);

  return true;
};
