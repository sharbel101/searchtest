'use client';

import { GoogleGenerativeAI } from '@google/generative-ai';

// This is a placeholder for calling the OpenAI API.
// In a real application, you would use the OpenAI SDK here.

// IMPORTANT: Move this API key to a secure environment variable in a real application.
const API_KEY = 'AIzaSyCmlnMwRzCRVKJULCV9QDfdsMj2cC2foUE';

const genAI = new GoogleGenerativeAI(API_KEY);

export const getDynamicText = async (text: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `Please rephrase the following text: "${text} only rewrite the sentence
   nothing else rephrase and give me a new sentence only as an output as this call is from
    a reprhasing api keep it simpe and easy to understand"`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rephrasedText = response.text();
    return rephrasedText.trim();
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    // Return original text as a fallback
    return text;
  }
};
