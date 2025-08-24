import { createClient } from '@/utils/supabase/server';
import { v4 as uuidv4 } from 'uuid';

export default async function saveQuestionAnswer(
  question: string,
  answer: string,
) {
  const supabase = await createClient();
  console.log('📡 Supabase client created:');

  const sessionId = uuidv4();
  console.log('🆔 Generated sessionId:', sessionId);

  try {
    console.log('📤 Attempting to insert row:', {
      session_id: sessionId,
      question,
      answer,
    });

    const { data, error, status, statusText } = await supabase
      .from('user_responses')
      .insert([{ session_id: sessionId, question, answer }])
      .select(); // fetch back inserted row for debugging

    console.log('📡 Supabase insert response:', {
      data,
      error,
      status,
      statusText,
    });

    if (error) {
      console.error('❌ Error returned from Supabase:', error);
      throw error;
    }

    console.log('✅ Successfully saved question/answer to Supabase:', {
      question,
      answer,
      returnedData: data,
    });
  } catch (error) {
    console.error('🔥 Exception caught in saveQuestionAnswer:', error);
  }
}
