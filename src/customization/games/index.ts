/* ------------------------------------------------------------
 * OWNER CUSTOMIZATION — GAME CATALOGUE
 * ------------------------------------------------------------
 * This file lists the games shown in the Mini Games hub and the
 * category chips. It contains NO game logic — only content.
 *
 * To change a game's name, description, category or the order it
 * appears in, edit the entries below.
 * To change the questions/answers a game uses, open the matching
 * file in this folder (see `contentFile` in each entry).
 *
 * `id` must match the game engine key in
 * src/features/games/registry.ts — do not rename an id unless you
 * also rename it there.
 * ------------------------------------------------------------ */

export type GameCategory = "quick" | "two-player" | "trivia" | "fun";

export interface GameDefinition {
  id: string;
  title: string;
  description: string;
  categories: GameCategory[];
  /** Where its questions/answers live (for your reference). */
  contentFile: string;
  featured?: boolean;
}

export const gameCategories: { id: GameCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "quick", label: "Quick" },
  { id: "two-player", label: "Two Player" },
  { id: "trivia", label: "Trivia" },
  { id: "fun", label: "Just for Fun" },
];

export const games: GameDefinition[] = [
  {
    id: "would-you-rather",
    title: "Would You Rather?",
    description: "Choose between two impossible options.",
    categories: ["quick", "two-player", "fun"],
    contentFile: "src/customization/games/wouldYouRather.ts",
    featured: true,
  },
  {
    id: "this-or-that",
    title: "This or That",
    description: "Fast picks, no overthinking.",
    categories: ["quick", "fun"],
    contentFile: "src/customization/games/thisOrThat.ts",
  },
  {
    id: "couple-trivia",
    title: "Who Knows Who Better",
    description: "How well do you really know each other?",
    categories: ["trivia", "two-player"],
    contentFile: "src/customization/games/coupleTrivia.ts",
  },
  {
    id: "trivia",
    title: "Trivia Challenge",
    description: "Quick questions for a fast round.",
    categories: ["trivia", "quick"],
    contentFile: "src/customization/games/trivia.ts",
  },
  {
    id: "twenty-questions",
    title: "20 Questions",
    description: "Think of something. The questions begin.",
    categories: ["two-player", "fun"],
    contentFile: "src/customization/games/twentyQuestions.ts",
  },
  {
    id: "emoji-guess",
    title: "Emoji Guess",
    description: "Can you figure out the word or phrase?",
    categories: ["quick", "fun"],
    contentFile: "src/customization/games/emojiGuess.ts",
  },
  {
    id: "word-scramble",
    title: "Word Scramble",
    description: "Unscramble the letters before you give up.",
    categories: ["quick", "fun"],
    contentFile: "src/customization/games/words.ts",
  },
  {
    id: "guess-the-word",
    title: "Guess the Word",
    description: "One clue. One word.",
    categories: ["quick", "fun"],
    contentFile: "src/customization/games/words.ts",
  },
  {
    id: "hangman",
    title: "Mini Hangman",
    description: "Guess the word one letter at a time.",
    categories: ["quick", "fun"],
    contentFile: "src/customization/games/words.ts",
  },
  {
    id: "riddles",
    title: "Riddle Me This",
    description: "A riddle, a think, an answer.",
    categories: ["trivia", "fun"],
    contentFile: "src/customization/games/riddles.ts",
  },
  {
    id: "two-truths",
    title: "Two Truths & a Lie",
    description: "Spot the one that doesn't fit.",
    categories: ["two-player", "fun"],
    contentFile: "src/customization/games/twoTruths.ts",
  },
  {
    id: "memory-match",
    title: "Memory Match",
    description: "Find every matching pair.",
    categories: ["quick", "fun"],
    contentFile: "src/customization/games/memoryMatch.ts",
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    description: "The classic, on one phone.",
    categories: ["two-player", "quick"],
    contentFile: "— no content file (pure logic)",
  },
  {
    id: "connect-four",
    title: "Connect Four",
    description: "Four in a row wins.",
    categories: ["two-player"],
    contentFile: "— no content file (pure logic)",
  },
  {
    id: "twenty-forty-eight",
    title: "2048",
    description: "Slide, merge, repeat.",
    categories: ["quick", "fun"],
    contentFile: "— no content file (pure logic)",
  },
];
