/* ------------------------------------------------------------
 * OWNER CUSTOMIZATION — DEFAULT TEXT
 * ------------------------------------------------------------
 * Every user-visible headline, subtitle and empty-state message
 * that is not user data lives here.
 *
 * Rules:
 *  - Keep the keys, change the strings.
 *  - Keep the language relationship-neutral
 *    ("you" / "your special someone").
 * ------------------------------------------------------------ */

export const content = {
  welcome: {
    title: "Welcome to TwoHearts",
    subtitle: "A private little space for you and your special someone.",
    cta: "Begin our story",
  },
  onboarding: {
    profileTitle: "About you",
    profileSubtitle: "Just a name and a photo. Nothing leaves this device.",
    partnerTitle: "Your special someone",
    partnerSubtitle: "Who are we keeping all of this for?",
    relationshipTitle: "Your beginning",
    relationshipSubtitle: "The day your story started.",
    personalizationTitle: "Make it yours",
    personalizationSubtitle: "You can change all of this later in Settings.",
    lockTitle: "Keep it private",
    lockSubtitle: "Add a PIN so only the two of you can open TwoHearts.",
    completeTitle: "You're all set",
    completeSubtitle: "Everything you add stays on this device.",
  },
  home: {
    greetingMorning: "Good morning",
    greetingAfternoon: "Good afternoon",
    greetingEvening: "Good evening",
    togetherLabel: "Together",
    tagline: "Our little space",
  },
  us: {
    title: "Us",
    subtitle: "Your shared space",
    counterLabel: "Together for",
  },
  emptyStates: {
    memories: "No memories yet. Add the first one you want to keep.",
    notes: "No notes yet. Leave a little thought.",
    timeline: "Your timeline is empty. Add the moment it all started.",
    reminders: "No reminders yet. Nothing to forget.",
    places: "No places yet. Save somewhere that means something.",
    moods: "No moods logged yet.",
    vault: "The vault is empty.",
    search: "Nothing matched that search.",
    periods: "No cycles recorded yet.",
    notifications: "No notifications yet.",
  },
  labels: {
    you: "You",
    partner: "Your special someone",
  },
} as const;
