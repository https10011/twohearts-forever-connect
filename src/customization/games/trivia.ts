/* ------------------------------------------------------------
 * OWNER CUSTOMIZATION — TRIVIA CHALLENGE
 * ------------------------------------------------------------
 * General knowledge questions. Same format as coupleTrivia.ts:
 * { question, choices: [...], correctIndex }
 *
 * ADD / EDIT / REMOVE whole { ... }, blocks freely.
 * ------------------------------------------------------------ */

import type { QuizQuestion } from "./coupleTrivia";

export const triviaQuestions: QuizQuestion[] = [
  {
    question: "Which planet is closest to the sun?",
    choices: ["Venus", "Mercury", "Mars", "Earth"],
    correctIndex: 1,
  },
  {
    question: "How many strings does a standard guitar have?",
    choices: ["4", "5", "6", "7"],
    correctIndex: 2,
  },
  {
    question: "What is the largest ocean on Earth?",
    choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctIndex: 3,
  },
  {
    question: "Which fruit is known for having its seeds on the outside?",
    choices: ["Strawberry", "Blueberry", "Kiwi", "Fig"],
    correctIndex: 0,
  },
  {
    question: "How many minutes are in a full day?",
    choices: ["1200", "1440", "1600", "2400"],
    correctIndex: 1,
  },
];
