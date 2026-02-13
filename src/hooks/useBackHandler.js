import { useEffect, useCallback } from 'react';
import { useApp } from '../context/AppContext';

/**
 * Handles hardware back button logic and "Double Tap to Exit"
 */
export const useBackHandler = (onDoubleBack) => {
  const { goBack, activeScreen } = useApp();

  const handleBack = useCallback((e) => {
    if (activeScreen === 'home' || activeScreen === 'onboarding') {
      // Logic for double-tap exit would be handled in the specific screen
      // but we prevent default back here
      return;
    }
    
    e.preventDefault();
    goBack();
  }, [activeScreen, goBack]);

  useEffect(() => {
    window.addEventListener('popstate', handleBack);
    return () => window.removeEventListener('popstate', handleBack);
  }, [handleBack]);
};
