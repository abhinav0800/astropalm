import React, { Suspense, lazy } from 'react';
import { AppProvider } from './context/AppContext';
import { LanguageProvider } from './context/LanguageContext';
import { UserProvider } from './context/UserContext';
import { NavigationProvider } from './context/NavigationContext';
import { ThemeProvider } from './context/ThemeContext';
import LoadingSpinner from './components/common/LoadingSpinner';
import CosmicBackground from './components/common/CosmicBackground';
import ScreenWrapper from './components/layout/ScreenWrapper';

// Lazy load screens for performance
const SplashScreen = lazy(() => import('./screens/SplashScreen'));

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <UserProvider>
          <NavigationProvider>
            <AppProvider>
              <div className="relative min-h-screen w-full bg-cosmic-900 text-white overflow-hidden font-sans select-none">
                {/* Global Background Layer */}
                <CosmicBackground />
                
                {/* Main Content Area */}
                <Suspense fallback={<LoadingSpinner fullScreen />}>
                  <ScreenWrapper>
                    {/* Routing Logic will be handled in NavigationContext / Router */}
                    <SplashScreen />
                  </ScreenWrapper>
                </Suspense>
              </div>
            </AppProvider>
          </NavigationProvider>
        </UserProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
