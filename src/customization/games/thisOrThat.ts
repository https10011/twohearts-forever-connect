/* ------------------------------------------------------------
 * OWNER CUSTOMIZATION — THIS OR THAT
 * ------------------------------------------------------------
 * Fast either/or picks. Same format as Would You Rather but
 * shorter, single-word style options.
 *
 * ADD:    copy a line, change the two words.
 * EDIT:   change the text in quotes.
 * REMOVE: delete the line.
 * ------------------------------------------------------------ */

export interface ThisOrThatRound {
  optionA: string;
  optionB: string;
}

export const thisOrThatRounds: ThisOrThatRound[] = [
  { optionA: "Coffee", optionB: "Tea" },
  { optionA: "Beach", optionB: "Mountains" },
  { optionA: "Morning", optionB: "Night" },
  { optionA: "Movies", optionB: "Music" },
  { optionA: "Sweet", optionB: "Savoury" },
  { optionA: "Rain", optionB: "Sunshine" },
  { optionA: "Call", optionB: "Text" },
  { optionA: "Plan it", optionB: "Wing it" },
];
