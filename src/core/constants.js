/**
 * Constants for Word Hunts CLI
 */

export const DEFAULT_CONFIG = {
  TABLE_MODE: true,
  MAX_RESULTS: 100,
  COLUMNS: 15,
  CELL_WIDTH: 12
};

export const MIN_WORD_LENGTH = 2;
export const TERMINAL_WIDTH_DEFAULT = 80;

export const CLI_USAGE = `
Word Hunts CLI v0.1.0

USAGE:
  wh [query]           Search for words starting with [query]
  wh                   Start interactive mode

OPTIONS:
  --help, -h           Show this help
  --version, -v        Show version

EXAMPLES:
  wh cat               Search words starting with "cat"
  wh                   Start interactive mode
`;

export const CLI_VERSION = "word-hunts-cli v0.1.0";

export const QUIT_COMMANDS = ["/q", "quit", "exit"];
export const REFRESH_UI_COMMANDS = ["getui", "refresh", "ui"];