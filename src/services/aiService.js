/**
 * aiService.js - Production-ready OpenRouter Integration
 * Vision Model: molmo-2-8b:free
 * Text Model: liquid/lfm-2.5-1.2b-thinking:free
 */

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const BASE_URL = "https://openrouter.ai/api/v1/chat/completions";

const SYSTEM_PROMPTS = {
  palmReading: (user, lang) => `
    You are a Master Palm Reader & Spiritual Guide.
    User Profile: Name: ${user.name}, Gender: ${user.gender}, DOB: ${user.dob}.
    Language: ${lang}.

    RULES:
    1. Tone: Calm, spiritual, empathetic, and human-like.
    2. Output: Long-form, highly structured analysis of Heart, Head, Life, and Fate lines.
    3. NO fear-based language. NO death predictions. NO medical or legal advice.
    4. Focus on symbolic interpretations and psychological reflection.
    5. Always provide guidance on how to embrace positive energies.
    6. Respond strictly in ${lang}.
  `,
  tarot: (category, user, lang) => `
    You are a Cosmic Tarot Interpreter.
    Category: ${category}. User: ${user.name}. Language: ${lang}.
    
    Interpret the drawn cards with depth and spiritual nuance. 
    Connect the symbolism to the user's specific journey in ${category}.
    Maintain a mystical yet grounded tone.
  `
};

export const aiService = {
  /**
   * Analyzes palm image using Vision AI
   */
  async analyzePalm(base64Image, user, lang) {
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "HTTP-Referer": window.location.origin,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "allenai/molmo-2-8b:free",
          messages: [
            {
              role: "system",
              content: SYSTEM_PROMPTS.palmReading(user, lang)
            },
            {
              role: "user",
              content: [
                { type: "text", text: "Please analyze the lines on this palm image deeply." },
                { type: "image_url", image_url: { url: base64Image } }
              ]
            }
          ]
        })
      });

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("AI Palm Analysis Error:", error);
      throw new Error("The stars are clouded right now. Please try again.");
    }
  },

  /**
   * Generates text-based spiritual guidance
   */
  async getGuidance(prompt, contextType, user, lang) {
    const systemMessage = contextType === 'tarot' 
      ? SYSTEM_PROMPTS.tarot(prompt.category, user, lang) 
      : SYSTEM_PROMPTS.palmReading(user, lang);

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "liquid/lfm-2.5-1.2b-thinking:free",
          messages: [
            { role: "system", content: systemMessage },
            { role: "user", content: prompt.text || prompt }
          ],
          temperature: 0.7
        })
      });

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("AI Text Guidance Error:", error);
      throw new Error("Cosmic connection interrupted.");
    }
  }
};
