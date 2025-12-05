/**
 * Constants for Word Hunts CLI
 */
import fs from 'fs';
import path from 'path';
import { __dirname } from "../utils/path.js";

const packageJsonPath = path.join(__dirname, "../../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const VERSION = packageJson.version;
const PACKAGE_NAME = packageJson.name;

export const DEFAULT_CONFIG = {
  TABLE_MODE: true,
  MAX_RESULTS: 100,
  COLUMNS: 15,
  CELL_WIDTH: 12
};

export const MIN_WORD_LENGTH = 2;
export const TERMINAL_WIDTH_DEFAULT = 80;

export const CLI_USAGE = `
Word Hunts CLI v${VERSION}

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

export const CLI_VERSION = `${PACKAGE_NAME} v${VERSION}`;

export const HELP_COMMANDS = ["--help","-h"];
export const CHECK_VERSION_COMMANDS = ["--version","-v"];

export const QUIT_COMMANDS = ["/q", "/quit", "/exit"];
export const REFRESH_UI_COMMANDS = ["getui","/refs","/ui"];