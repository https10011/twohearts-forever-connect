/* ------------------------------------------------------------
 * OWNER CUSTOMIZATION — WHO KNOWS WHO BETTER
 * ------------------------------------------------------------
 * Multiple-choice questions about the two of you.
 *
 * Format:
 * {
 *   question: "the question shown on screen",
 *   choices: ["option 1", "option 2", "option 3", "option 4"],
 *   correctIndex: 0   // 0 = first choice, 1 = second, ...
 * }
 *
 * ADD:    copy a whole { ... }, block and edit it.
 * EDIT:   change question text, choices, or correctIndex.
 * REMOVE: delete the whole { ... }, block.
 *
 * Personalise these! Replace them with real answers about your
 * special someone — the engine does not care what the text says.
 * ------------------------------------------------------------ */

export interface QuizQuestion {
  question: string;
  choices: string[];
  correctIndex: number;
}

export const coupleTriviaQuestions: QuizQuestion[] = [
  {
    question: "What is their go-to comfort food?",
    choices: ["Noodles", "Pizza", "Ice cream", "Fried rice"],
    correctIndex: 0,
  },
  {
    question: "How do they take their coffee?",
    choices: ["Black", "With milk", "Extra sweet", "They prefer tea"],
    correctIndex: 1,
  },
  {
    question: "What makes them laugh the fastest?",
    choices: ["Bad puns", "Animal videos", "Your impressions", "Memes"],
    correctIndex: 2,
  },
  {
    question: "Their ideal weekend is...",
    choices: ["Out with friends", "A quiet day in", "Somewhere new", "Sleeping in"],
    correctIndex: 1,
  },
  {
    question: "What do they always forget?",
    choices: ["Keys", "Charger", "Umbrella", "Water bottle"],
    correctIndex: 1,
  },
];
