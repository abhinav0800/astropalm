import imageCompression from 'browser-image-compression';

export const imageService = {
  /**
   * Compresses image before sending to Vision AI to save bandwidth and stay within limits
   */
  async compressImage(file) {
    const options = {
      maxSizeMB: 0.8,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
      fileType: 'image/jpeg'
    };

    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      console.error("Compression Error:", error);
      return file;
    }
  },

  /**
   * Converts file to Base64 for AI API processing
   */
  fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
};
