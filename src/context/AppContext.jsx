import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAppReady, setIsAppReady] = useState(false);
  const [activeScreen, setActiveScreen] = useState('splash');
  const [history, setHistory] = useState(['splash']);

  // Handle navigation with History API simulation for PWA
  const navigateTo = (screen) => {
    setActiveScreen(screen);
    setHistory(prev => [...prev, screen]);
    window.history.pushState({ screen }, screen, `?screen=${screen}`);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const prevScreen = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setActiveScreen(prevScreen);
      return true;
    }
    return false;
  };

  return (
    <AppContext.Provider value={{ 
      isAppReady, setIsAppReady, 
      activeScreen, setActiveScreen, 
      navigateTo, goBack 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
