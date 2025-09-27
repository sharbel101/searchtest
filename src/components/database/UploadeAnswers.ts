import { createClient } from '@/utils/supabase/client';
import { useChartFormDBFlowStore } from './zustand_containers/ChartFormFlowStore';
import { useMainDBFlowStore } from './zustand_containers/MainFlowStore';
import { useInjectedDBFlowStore } from './zustand_containers/InjectedFlowStore';
import { extractKeyInfo } from '../AI features/openai';
import { DBresponse } from './DBtypes';

export default async function saveQuestionAnswer(
  user_id: string,
  response: string,
  field_id?: string | null,
  stage_field_id?: string | null,
  extractionType?: string,
) {
  const supabase = createClient();

  // Run AI extraction only if requested
  const processedResponse = extractionType
    ? await extractKeyInfo(response, extractionType)
    : response;

  const payload: DBresponse = {
    user_id,
    field_id: field_id ?? null,
    stage_field_id: stage_field_id ?? null,
    response: processedResponse,
  };

  try {
    const { data, error } = await supabase
      .from('user_responses')
      .insert([payload])
      .select();

    if (error) {
      console.error('❌ Supabase error in saveQuestionAnswer:', error);
      throw new Error(error.message);
    }

    console.log('✅ Saved question/answer:', data);
    return data;
  } catch (err) {
    console.error('🔥 Unexpected exception in saveQuestionAnswer:', err);
    throw err;
  }
}
