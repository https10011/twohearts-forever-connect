/* ------------------------------------------------------------
 * OWNER CUSTOMIZATION — WORD GAMES CONTENT
 * ------------------------------------------------------------
 * Shared word list used by:
 *   - Word Scramble
 *   - Guess the Word
 *   - Mini Hangman
 *
 * Format: { word: "sunset", clue: "The end of the day" }
 *  - word: letters only, no spaces (lowercase is fine)
 *  - clue: shown to the player
 *
 * ADD / EDIT / REMOVE lines freely. Keep at least three entries.
 * ------------------------------------------------------------ */

export interface WordEntry {
  word: string;
  clue: string;
}

export const wordEntries: WordEntry[] = [
  { word: "sunset", clue: "The end of the day, in colour" },
  { word: "letter", clue: "Written, folded, kept" },
  { word: "coffee", clue: "How mornings start" },
  { word: "memory", clue: "Something you keep without holding it" },
  { word: "promise", clue: "Small word, heavy weight" },
  { word: "garden", clue: "Where roses and lilies live" },
  { word: "harbour", clue: "Where boats rest" },
  { word: "lantern", clue: "Light you can carry" },
];
