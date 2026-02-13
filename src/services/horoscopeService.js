import { getZodiacSign } from '../utils/zodiacUtils';

export const horoscopeService = {
  async getDailyHoroscope(birthDate, lang) {
    const sign = getZodiacSign(new Date(birthDate));
    // In production, this would call aiService.getGuidance 
    // with a specific horoscope system prompt
    return {
      sign,
      date: new Date().toLocaleDateString(),
      mood: "Reflective",
      intensity: "High"
    };
  }
};
