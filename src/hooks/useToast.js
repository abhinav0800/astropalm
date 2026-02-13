import { create } from 'zustand';

// Small state store for toast notifications
const useToastStore = create((set) => ({
  message: null,
  type: 'info', // 'info' | 'success' | 'error' | 'warning'
  isVisible: false,
  show: (message, type = 'info', duration = 3000) => {
    set({ message, type, isVisible: true });
    setTimeout(() => {
      set({ isVisible: false });
    }, duration);
  },
  hide: () => set({ isVisible: false }),
}));

/**
 * Hook to trigger global toast notifications
 */
export const useToast = () => {
  const { message, type, isVisible, show, hide } = useToastStore();
  return { message, type, isVisible, show, hide };
};
