/* ------------------------------------------------------------
 * OWNER CUSTOMIZATION — TWO TRUTHS & A LIE
 * ------------------------------------------------------------
 * Format:
 * {
 *   statements: ["truth", "truth", "lie"],   // exactly three
 *   lieIndex: 2                              // which one is the lie
 * }
 * Personalise these with real statements about the two of you.
 * ------------------------------------------------------------ */

export interface TwoTruthsRound {
  statements: [string, string, string];
  lieIndex: 0 | 1 | 2;
}

export const twoTruthsRounds: TwoTruthsRound[] = [
  {
    statements: [
      "We talked until sunrise on one of our first calls",
      "We both dislike the same song",
      "We met on a rainy Tuesday",
    ],
    lieIndex: 2,
  },
  {
    statements: [
      "Our first photo together is blurry",
      "We once got lost looking for food",
      "Neither of us likes dessert",
    ],
    lieIndex: 2,
  },
  {
    statements: [
      "One of us always falls asleep first",
      "We have matching favourite colours",
      "We have never watched a movie together",
    ],
    lieIndex: 2,
  },
];
