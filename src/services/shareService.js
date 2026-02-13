export const shareService = {
  /**
   * Uses Web Share API for native mobile sharing experience
   */
  async shareContent({ title, text, url }) {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: url || window.location.origin,
        });
        return true;
      } catch (error) {
        console.error("Share Error:", error);
        return false;
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(`${text} ${url || window.location.origin}`);
        return 'copied';
      } catch (err) {
        return false;
      }
    }
  }
};
