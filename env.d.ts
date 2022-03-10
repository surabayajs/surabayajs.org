declare namespace NodeJS {
  interface ProcessEnv {
    readonly CONTENTFUL_API_KEY: string;
    readonly CONTENTFUL_SPACE_ID: string;
    readonly LOCALE: string;
  }
}

declare const __DEV__: boolean;
