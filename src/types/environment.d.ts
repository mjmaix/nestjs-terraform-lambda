export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
