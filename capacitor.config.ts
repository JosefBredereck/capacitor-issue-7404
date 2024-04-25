import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.7404.app',
  appName: 'capacitor-project',
  webDir: 'dist/capacitor-project/browser',

  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
