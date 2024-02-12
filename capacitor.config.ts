import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.ignisus.app',
  appName: 'Ignisus',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
