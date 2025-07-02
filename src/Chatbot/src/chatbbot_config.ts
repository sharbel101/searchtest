interface ImportMetaEnv {
  VITE_THEME_BASE_CDN_URL?: string;
  VITE_THEME_DEFAULT_CACHE_EXPIRATION?: string;
  VITE_THEME_CACHE_KEY_PREFIX?: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

//replace with env variables
export const Config = {
  DEFAULT_URL: import.meta.env?.VITE_THEME_BASE_CDN_URL,
  DEFAULT_EXPIRATION: import.meta.env?.VITE_THEME_DEFAULT_CACHE_EXPIRATION,
  CACHE_KEY_PREFIX: import.meta.env?.VITE_THEME_CACHE_KEY_PREFIX,
};
