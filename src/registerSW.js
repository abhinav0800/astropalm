import { registerSW as viteRegisterSW } from 'virtual:pwa-register';

export function registerSW() {
  if ('serviceWorker' in navigator) {
    const updateSW = viteRegisterSW({
      onNeedRefresh() {
        if (confirm('New cosmic energy available. Update app?')) {
          updateSW(true);
        }
      },
      onOfflineReady() {
        console.log('App ready to work offline');
      },
      onRegisterError(error) {
        console.error('SW registration error', error);
      }
    });
  }
}
