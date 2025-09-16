import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const supabaseUrl = 'https://ebobswoijxoostgzdpse.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVib2Jzd29panhvb3N0Z3pkcHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2NzA0MTAsImV4cCI6MjA3MTI0NjQxMH0.Uth5LGEIwBzYx7DQ0ofnHFtkKePV100cGWsATs5VS08';
// console.log('🔑 Supabase URL:', supabaseUrl);
// console.log('🔑 Supabase Key (anon):', supabaseKey.substring(0, 15) + '...'); // don't log full key in production

const supabase = createClient(supabaseUrl, supabaseKey);
// console.log('📡 Supabase client created:', supabase);

const sessionId = uuidv4();
// console.log('🆔 Generated sessionId:', sessionId);

export const saveQuestionAnswer = async (question: string, answer: string) => {
  // console.log('📥 saveQuestionAnswer CALLED with:', { question, answer });

  try {
    // console.log('📤 Attempting to insert row:', {
    // session_id: sessionId,
    // question,
    // answer,
    // });

    const { data, error, status, statusText } = await supabase
      .from('user_responses')
      .insert([{ session_id: sessionId, question, answer }])
      .select(); // fetch back inserted row for debugging

    // console.log('📡 Supabase insert response:', {
    //   data,
    //   error,
    //   status,
    //   statusText,
    // });

    if (error) {
      console.error('❌ Error returned from Supabase:', error);
      throw error;
    }

    // console.log('✅ Successfully saved question/answer to Supabase:', {
    //   question,
    //   answer,
    //   returnedData: data,
    // });
  } catch (error) {
    console.error('🔥 Exception caught in saveQuestionAnswer:', error);
  }
};
