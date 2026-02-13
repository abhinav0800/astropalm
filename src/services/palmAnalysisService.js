/**
 * Local helper for Palm Reading state management
 */
export const palmAnalysisService = {
  getLineInfo(lineKey) {
    const lines = {
      heart: { name: "Heart Line", focus: "Emotions, Romance, Relationship depth" },
      head: { name: "Head Line", focus: "Intellect, Mentality, Psychological focus" },
      life: { name: "Life Line", focus: "Vitality, Physicality, Life path energy" },
      fate: { name: "Fate Line", focus: "Career path, External influences, Destiny" }
    };
    return lines[lineKey] || null;
  },

  generateReadingID() {
    return `palm_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
};
