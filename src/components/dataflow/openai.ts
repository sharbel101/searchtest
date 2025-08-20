'use client';

const API_KEY =
  '9ec0f6add86a9828260e00eaddd69d56680c22943ae4a1ee4ddd55cca747d486';
const API_URL = 'https://api.together.xyz/v1/chat/completions';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

/**
 * Helper function to call Together AI API (OpenAI-compatible).
 */
async function callTogetherAPI(
  messages: Message[],
  model = 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo',
) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 256,
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(
      `Together API error: ${response.status} ${response.statusText} - ${JSON.stringify(err)}`,
    );
  }

  const data = await response.json();
  // The response format follows OpenAI's chat completions spec:
  return data.choices[0].message.content.trim();
}

/**
 * Rephrases text for the chatbot.
 */
export const getDynamicText = async (text: string): Promise<string> => {
  try {
    const prompt = `Please rephrase the following text: "${text}".
Only rewrite the sentence, keep it simple and easy to understand.
Output only the new sentence without extra commentary.`;

    const messages: Message[] = [{ role: 'user', content: prompt }];

    const rephrasedText = await callTogetherAPI(messages);
    return rephrasedText;
  } catch (error) {
    console.error('Error calling Together API (rephrase):', error);
    return text;
  }
};

/**
 * Extracts key information from user text.
 * Example: "my company name is Acme Corp" → "Acme Corp"
 */
export const extractKeyInfo = async (
  text: string,
  infoType: string,
): Promise<string> => {
  try {
    const prompt = `From the following sentence, extract only the ${infoType} with no extra words.
For example, if the user says "my company name is Acme Corp", output just "Acme Corp".
Do NOT include the rest of the sentence. Input: "${text}"`;

    const messages: Message[] = [{ role: 'user', content: prompt }];

    const extractedText = await callTogetherAPI(messages);
    console.log(`✅ Extracted ${infoType}:`, extractedText);
    return extractedText;
  } catch (error) {
    console.error(`Error extracting ${infoType}:`, error);
    return '';
  }
};
