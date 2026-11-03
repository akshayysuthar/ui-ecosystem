// Same names as the money manager's theme.js, so migration is a find-replace.
export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 } as const;
export const radius = { sm: 8, md: 14, lg: 20, pill: 999 } as const;
export const font = { small: 12, body: 16, title: 20, h1: 28 } as const;

export type Colors = {
  bg: string; // screen background
  surface: string; // cards, rows, inputs
  line: string; // borders and dividers
  ink: string; // main text
  muted: string; // secondary text
  primary: string;
  primarySoft: string; // tinted background for icons and chips
  onPrimary: string; // text/icon color ON a primary background
  income: string;
  expense: string;
};

export const light: Colors = {
  bg: "#f5f6f8",
  surface: "#ffffff",
  line: "#e5e7eb",
  ink: "#111827",
  muted: "#6b7280",
  primary: "#2563eb",
  primarySoft: "#dbeafe",
  onPrimary: "#ffffff",
  income: "#16a34a",
  expense: "#dc2626",
};
export const dark: Colors = {
  bg: "#0b0d10",
  surface: "#16191d",
  line: "#262b31",
  ink: "#f3f4f6",
  muted: "#9ca3af",
  primary: "#60a5fa",
  primarySoft: "#1e3a5f",
  onPrimary: "#0b0d10",
  income: "#4ade80",
  expense: "#f87171",
};
