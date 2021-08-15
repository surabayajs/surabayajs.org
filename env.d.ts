declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly VERCEL?: "1";
    readonly VERCEL_ENV: "development" | "preview" | "production";

    readonly CONTENTFUL_API_KEY: string;
    readonly CONTENTFUL_SPACE_ID: string;
  }
}

declare const __DEV__: boolean;
