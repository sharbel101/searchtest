import { createClient } from '@/utils/supabase/client';
import {
  DBFlowSection,
  DBFlowField,
  DBCurrentStates,
  DBchartFlowField,
  DBchartFormAnswer,
  BranchTarget,
} from '@/components/database/DBtypes';

import { useChartFormDBFlowStore } from '@/components/database/zustand_containers/ChartFormFlowStore'; //for the DB

import { getCurrentState, setCurrentState } from './mainFlowDBfunc';
import { useMainDBFlowStore } from './zustand_containers/MainFlowStore';
import saveQuestionAnswer from './UploadeAnswers';
import { useUserInfo } from '@/components/database/zustand_containers/UsersInfo';
const { user_id } = useUserInfo.getState();

const supabase = createClient();

// ---------- Queries ----------

// Fetch all fields
export async function getAllChartFormFields(
  section_id: string,
): Promise<DBchartFlowField[]> {
  const { data, error } = await supabase.from('chartform_flow').select('*');

  if (error) {
    console.error('Error fetching chartform_flow fields:', error.message);
    return [];
  }

  //in case we want to use the zustand store.
  //const {} = useMainDBFlowStore.getState();

  return data ?? [];
}

// Fetch a specific field
export async function getSpecificChartFormField(
  fieldId: string,
): Promise<DBchartFlowField | null> {
  const { data, error } = await supabase
    .from('chartform_flow')
    .select('*')
    .eq('id', fieldId)
    .maybeSingle();

  if (error) {
    console.error('Error fetching chartform_flow field:', error.message);
    return null;
  }

  return data;
}

export async function getCurrentChartFormField(
  user_id: string,
): Promise<DBchartFlowField | null> {
  let current_state = await getCurrentState(user_id);

  // If no state exists or field is null, initialize starting node
  if (!current_state || !current_state.current_chartform_id === null) {
    const starting_node = await getChartFormFieldStartingNodes();

    if (!starting_node) {
      console.warn(
        "can't fetch starting nodes from get current Chart form field",
      );
      return null;
    }

    await setCurrentState(
      {
        current_chartform_id: starting_node.id,
      },
      user_id,
    );

    // Fetch latest state after upsert
    current_state = await getCurrentState(user_id);

    const latest_chartform_field = current_state?.current_chartform_id
      ? await getSpecificChartFormField(current_state.current_chartform_id)
      : starting_node;

    // Update zustand store
    if (!latest_chartform_field) {
      console.warn(
        'No latest chartform field from get Current chart form field',
      );
      return null;
    }

    const { setCurrentChartFormField } = useChartFormDBFlowStore.getState();
    setCurrentChartFormField(latest_chartform_field);

    return latest_chartform_field;
  }

  // Normal path: fetch current field
  if (!current_state.current_chartform_id) {
    console.warn('Missing field_id in current state');
    return null;
  }

  const latest_chartform_field = await getSpecificChartFormField(
    current_state.current_chartform_id,
  );

  if (!latest_chartform_field) {
    console.warn(
      "can't access a current field (from get current chart form field)",
    );
    return null;
  }

  // Update zustand store
  const { setCurrentChartFormField } = useChartFormDBFlowStore.getState();
  setCurrentChartFormField(latest_chartform_field);

  return latest_chartform_field;
}

export async function getChartFormFieldStartingNodes(): Promise<DBchartFlowField | null> {
  try {
    const { data, error } = await supabase
      .from('chartform_flow')
      .select('*')
      .not('starting_node', 'is', null)
      .maybeSingle();

    if (error) throw error;

    //zustand store
    const { setCurrentChartFormField } = useChartFormDBFlowStore.getState();
    setCurrentChartFormField(data);

    return data;
  } catch (error) {
    console.error(
      'Error fetching main starting nodes (in section function):',
      error,
    );
    throw error;
  }
}

export async function getQuestionBody(user_id: string) {
  const current_field = await getCurrentChartFormField(user_id);
  if (!current_field) {
    console.warn("Can't get the field to extract the question body!");
    return 'Unknown Field.';
  }
  return current_field.question;
}

export async function getCurrentChartFormAnswers(field_id: string) {
  const current_chartform_field = await getCurrentChartFormField(user_id);

  if (!current_chartform_field) {
    console.warn("can't access the current chart form field answers!");
    return [];
  }

  const current_answers = current_chartform_field.answers as Record<
    string,
    BranchTarget
  > | null;

  if (!current_answers) {
    console.warn(
      'no current answers from getCurrentAnswers in chartForm DB functions',
    );
    return [];
  }

  // Convert from object form -> array form
  const answers = Object.entries(current_answers).map(([answer, target]) => ({
    answer,
    ...target,
  }));
  console.log(
    'these are the extracted options from the chartForm Flow DB func in getCurrent chart from answers',
    answers,
  );
  return answers;
}

export async function AnswerChartFormQuestion(userInput: string) {
  const field = await getCurrentChartFormField(user_id);
  if (!field) {
    console.warn('no current field in answerChartFormQuestion');
    return;
  }

  const question = field?.question;
  if (!question) return;

  const question_answers = await getCurrentChartFormAnswers(field.id);

  // find the matching answer
  const answerConfig = question_answers.find((a) => a.answer === userInput);
  if (!answerConfig) {
    console.warn(`No matching config found for input: ${userInput}`);
    return;
  }

  console.log('this is the AnswerConfig:', answerConfig);

  if (answerConfig.setStage) {
    //database update
    await setCurrentState(
      {
        is_flow_func: false,
      },
      user_id,
    );

    //Save the stage in the user_responses
    saveQuestionAnswer(user_id, answerConfig.setStage, null, field.id);

    //zustand update
    const { setStage, setCurrentChartFormField } =
      useChartFormDBFlowStore.getState();
    const { setIsInFlowFunc } = useMainDBFlowStore.getState();
    setIsInFlowFunc(false);
    setStage(answerConfig.setStage);
    setCurrentChartFormField(null);

    return answerConfig.setStage;
  } else if (answerConfig.next) {
    await setCurrentState(
      {
        current_chartform_id: answerConfig.next,
      },
      user_id,
    );

    // HERE I CAN SAVE THE CHARTFORM RESPONSES
    // saveQuestionAnswer(balbalbal)
  }
}
