/* ------------------------------------------------------------
 * OWNER CUSTOMIZATION — BRANDING
 * ------------------------------------------------------------
 * This file controls the app's name, tagline and logo asset.
 * You can safely change every value below.
 * Do not modify feature logic to change normal content.
 *
 * Logo: replace the file at src/assets/branding/twohearts_logo.svg
 * (keep the same filename) or point `logoSrc` at another asset you
 * import yourself.
 * ------------------------------------------------------------ */

import logo from "@/assets/branding/twohearts_logo.svg";

export const branding = {
  /** Shown in the top bar, splash and About screen. */
  appName: "TwoHearts",
  /** Short line under the app name on Splash / Welcome. */
  tagline: "Our little space",
  /** App version shown in Settings > About. */
  version: "1.0.0",
  /** Replaceable logo asset. */
  logoSrc: logo,
} as const;
