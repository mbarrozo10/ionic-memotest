import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app4.ionic',
  appName: 'app4',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
    },
  },
};

export default config;
