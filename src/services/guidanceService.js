export const guidanceService = {
  getDailyFocus() {
    const focuses = [
      "Mindfulness & Presence",
      "Emotional Healing",
      "Career Momentum",
      "Self-Compassion",
      "Spiritual Connectivity",
      "Physical Vitality"
    ];
    // Return a focus based on the current day to keep it consistent for 24h
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    return focuses[dayOfYear % focuses.length];
  }
};
