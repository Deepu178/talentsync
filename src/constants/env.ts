export const isProd = process.env.NODE_ENV === "production";

export const ICON_SIZE = 24;

export const NEXT_PUBLIC_APP_URL = isProd
  ? "https://talentsync.work"
  : "http://localhost:3000";
