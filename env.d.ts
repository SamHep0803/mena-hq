declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      VATSIM_URL: string;
      VATSIM_SCOPE: string;
      VATSIM_CLIENT_ID: string;
      VATSIM_CLIENT_SECRET: string;
      CALLBACK_URL: string;
      SESSION_SECRET: string;
    }
  }
}

export {}
