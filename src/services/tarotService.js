/**
 * Logic for Tarot Deck manipulation
 */
export const tarotService = {
  shuffleDeck(deck) {
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  drawCards(deck, count = 1) {
    const shuffled = this.shuffleDeck(deck);
    return shuffled.slice(0, count).map(card => ({
      ...card,
      isReversed: Math.random() > 0.7 // 30% chance of reversed meaning
    }));
  }
};
