'use client';

const API_KEY = 'AIzaSyCcePxMAkYx313GWjuYDRJwW_eo8wtDhRA';
const API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite	:generateContent';

/**
 * Helper function to call Google Gemini API.
 */
async function callGeminiAPI(prompt: string) {
  const response = await fetch(`${API_URL}?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(
      `Gemini API error: ${response.status} ${response.statusText} - ${JSON.stringify(err)}`,
    );
  }

  const data = await response.json();
  // The response format follows Google's generative language spec:
  return data.candidates[0].content.parts[0].text.trim();
}

/**
 * Rephrases text for the chatbot.
 */
export const getDynamicText = async (text: string): Promise<string> => {
  try {
    const prompt = `Please rephrase the following text: "${text}".
Only rewrite the sentence, keep it simple and easy to understand.
Output only the new sentence without extra commentary.`;

    const rephrasedText = await callGeminiAPI(prompt);
    return rephrasedText;
  } catch (error) {
    console.error('Error calling Gemini API (rephrase):', error);
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

    const extractedText = await callGeminiAPI(prompt);
    console.log(`✅ Extracted ${infoType}:`, extractedText);
    return extractedText;
  } catch (error) {
    console.error(`Error extracting ${infoType}:`, error);
    return '';
  }
};
