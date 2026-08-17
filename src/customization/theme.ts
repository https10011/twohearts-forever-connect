/* ------------------------------------------------------------
 * OWNER CUSTOMIZATION — THEME
 * ------------------------------------------------------------
 * Colors, fonts and radii live as CSS design tokens in
 *   src/styles.css   (:root block)
 * because the whole UI is themed from those tokens.
 *
 * This file documents the token names so you know exactly which
 * line to edit in src/styles.css, and holds the default
 * appearance preferences applied on first launch.
 * ------------------------------------------------------------ */

export const themeTokenMap = {
  /** Burgundy brand accent — src/styles.css → --primary */
  brandAccent: "--primary",
  /** Page background (warm cream) — --background */
  background: "--background",
  /** Card surfaces — --card */
  card: "--card",
  /** Soft blush tint — --blush */
  blush: "--blush",
  /** Muted rose — --rose */
  rose: "--rose",
  /** Warm beige / sand — --sand */
  sand: "--sand",
  /** Gold detail — --gold */
  gold: "--gold",
  /** Display (serif) font family — --font-display-family */
  displayFont: "--font-display-family",
  /** Body font family — --font-sans-family */
  bodyFont: "--font-sans-family",
  /** Corner roundness — --radius */
  radius: "--radius",
} as const;

export type TextSize = "small" | "default" | "large" | "xlarge";
export type ThemeMode = "light" | "dark";

export const appearanceDefaults = {
  /** "light" | "dark" */
  mode: "light" as ThemeMode,
  /** "small" | "default" | "large" | "xlarge" */
  textSize: "default" as TextSize,
  /** Reduce motion for gentler transitions. */
  reducedMotion: false,
};
