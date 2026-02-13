import React, { createContext, useContext, useEffect, useState } from 'react';
import { useApp } from './AppContext';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const { activeScreen, setActiveScreen, goBack } = useApp();
  const [backPressCount, setBackPressCount] = useState(0);

  // Handle hardware back button for PWA/Android
  useEffect(() => {
    const handlePopState = (event) => {
      if (!goBack()) {
        // Handle double back to exit logic elsewhere
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [goBack]);

  return (
    <NavigationContext.Provider value={{ backPressCount, setBackPressCount }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationState = () => useContext(NavigationContext);
