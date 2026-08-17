/* ------------------------------------------------------------
 * OWNER CUSTOMIZATION — FEATURE DEFAULTS
 * ------------------------------------------------------------
 * First-launch defaults for features. Changing these only affects
 * new installs / values the user has not overridden in Settings.
 * ------------------------------------------------------------ */

export const reminderDefaults = {
  /** Default time (24h) suggested when creating a reminder. */
  defaultTime: "09:00",
  /** Default repeat option: "none" | "daily" | "weekly" | "monthly" | "yearly" */
  defaultRepeat: "none" as "none" | "daily" | "weekly" | "monthly" | "yearly",
  /** How many days before an important date to notify. */
  importantDateLeadDays: 1,
};

export const periodTrackerDefaults = {
  /** Typical cycle length in days. */
  cycleLength: 28,
  /** Typical period duration in days. */
  periodLength: 5,
  /** Show the estimated fertile window on the calendar. */
  showFertileWindow: true,
  /** Notify this many days before the estimated period. */
  reminderLeadDays: 2,
  /** Keep tracker data hidden from Home / shared surfaces. */
  privateByDefault: true,
};

export const securityDefaults = {
  /** App lock enabled after onboarding. */
  appLockEnabled: false,
  /** Auto-lock delay in minutes once the app is backgrounded. */
  autoLockMinutes: 1,
  /** Vault always requires the app lock PIN. */
  vaultRequiresPin: true,
};

export const moodOptions = [
  { id: "loved", label: "Loved" },
  { id: "happy", label: "Happy" },
  { id: "calm", label: "Calm" },
  { id: "tired", label: "Tired" },
  { id: "stressed", label: "Stressed" },
  { id: "sad", label: "Sad" },
] as const;

export const memoryPlaceholderTags = ["Firsts", "Trips", "Everyday", "Celebrations"] as const;
