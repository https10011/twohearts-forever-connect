/* ------------------------------------------------------------
 * OWNER CUSTOMIZATION — NOTIFICATION TEXT & CHANNELS
 * ------------------------------------------------------------
 * Titles/bodies for every local (device) notification TwoHearts
 * can schedule. `{title}` and `{days}` are replaced at runtime.
 *
 * Notifications are real Android local notifications scheduled
 * through Capacitor. Nothing is sent over the internet.
 * ------------------------------------------------------------ */

export const notificationChannels = [
  { id: "reminders", name: "Reminders", description: "Your custom reminders" },
  { id: "important-dates", name: "Important dates", description: "Anniversaries and special days" },
  { id: "period-tracker", name: "Period tracker", description: "Cycle reminders" },
] as const;

export const notificationText = {
  reminder: {
    channelId: "reminders",
    title: "{title}",
    body: "A little reminder from TwoHearts.",
  },
  importantDate: {
    channelId: "important-dates",
    title: "{title}",
    body: "It's today. Make it count.",
  },
  periodExpected: {
    channelId: "period-tracker",
    title: "Period expected soon",
    body: "Estimated to start in {days} days.",
  },
  periodTracking: {
    channelId: "period-tracker",
    title: "Tracking reminder",
    body: "Log today's cycle info when you have a moment.",
  },
} as const;
