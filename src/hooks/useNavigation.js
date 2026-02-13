import { useApp } from '../context/AppContext';

/**
 * Clean hook for screen-to-screen navigation
 */
export const useNavigation = () => {
  const { navigateTo, goBack, activeScreen } = useApp();

  return {
    navigate: navigateTo,
    back: goBack,
    currentScreen: activeScreen,
    // Helper for bottom nav
    isHome: activeScreen === 'home',
    isSettings: activeScreen === 'settings'
  };
};
