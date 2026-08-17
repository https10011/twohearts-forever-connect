/* ------------------------------------------------------------
 * OWNER CUSTOMIZATION — RIDDLE ME THIS
 * ------------------------------------------------------------
 * Format: { riddle: "...", answer: "..." }
 * Answers are matched case-insensitively, spaces ignored.
 * ------------------------------------------------------------ */

export interface Riddle {
  riddle: string;
  answer: string;
}

export const riddles: Riddle[] = [
  { riddle: "I have keys but no locks, space but no room. What am I?", answer: "keyboard" },
  { riddle: "The more you take, the more you leave behind. What am I?", answer: "footsteps" },
  { riddle: "I'm tall when young and short when old. What am I?", answer: "candle" },
  { riddle: "What has hands but cannot clap?", answer: "clock" },
  { riddle: "What gets wetter the more it dries?", answer: "towel" },
];
