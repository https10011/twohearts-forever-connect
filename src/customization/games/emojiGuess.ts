/* ------------------------------------------------------------
 * OWNER CUSTOMIZATION — EMOJI GUESS
 * ------------------------------------------------------------
 * Each puzzle shows the emojis and accepts the answer text
 * (case-insensitive, spaces ignored).
 *
 * Format: { emojis: "🎬🍿", answer: "movie night", hint: "..." }
 * hint is optional.
 * ------------------------------------------------------------ */

export interface EmojiPuzzle {
  emojis: string;
  answer: string;
  hint?: string;
}

export const emojiPuzzles: EmojiPuzzle[] = [
  { emojis: "🎬🍿", answer: "movie night", hint: "A cosy plan" },
  { emojis: "🌅☕", answer: "morning coffee", hint: "How the day starts" },
  { emojis: "✈️🧳", answer: "trip", hint: "Somewhere far" },
  { emojis: "🎂🎉", answer: "birthday", hint: "Once a year" },
  { emojis: "🌧️📚", answer: "rainy day", hint: "Stay inside" },
  { emojis: "🍝🕯️", answer: "dinner date", hint: "Dressed up" },
];
