import React, { createContext, useContext, useState, useEffect } from 'react';
import { theme } from '../theme/theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme] = useState(theme);

  useEffect(() => {
    // Apply theme colors to meta tags for PWA look
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme.colors.background.deep);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
