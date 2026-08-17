/* ------------------------------------------------------------
 * OWNER CUSTOMIZATION — WOULD YOU RATHER
 * ------------------------------------------------------------
 * Each entry is one round with two options.
 *
 * To ADD a round:   copy a line and change optionA / optionB.
 * To EDIT a round:  change the text between the quotes.
 * To REMOVE a round: delete the whole { ... }, line.
 *
 * Format: { optionA: string; optionB: string }
 * Keep at least one entry.
 * ------------------------------------------------------------ */

export interface WouldYouRatherRound {
  optionA: string;
  optionB: string;
}

export const wouldYouRatherRounds: WouldYouRatherRound[] = [
  { optionA: "A quiet night in together", optionB: "A spontaneous road trip" },
  { optionA: "Breakfast in bed", optionB: "Midnight snacks in the kitchen" },
  { optionA: "Always know what I'm thinking", optionB: "Always know what I'm feeling" },
  { optionA: "Relive our first date", optionB: "Fast forward to our tenth year" },
  { optionA: "Handwritten letters forever", optionB: "Voice notes forever" },
  { optionA: "A tiny cabin in the mountains", optionB: "A small place by the sea" },
  { optionA: "Dance badly in the kitchen", optionB: "Sing badly in the car" },
  { optionA: "Never argue again", optionB: "Never run out of things to say" },
];
