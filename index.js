import readline from "readline";
import { loadConfig, saveConfig } from "./lib/config.js";
import { searchByPrefix } from "./lib/search.js";
import { printResults } from "./lib/printers/index.js";
import { handleCommand } from "./lib/commands.js";
import { printHeader } from "./lib/ui.js";
import { truncate } from "./lib/utils/truncate.js";

let config = loadConfig(); // single source of truth

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// setters: operate directly on config (no duplicate vars)
const setters = {
  setMaxResults: (v) => { config.MAX_RESULTS = v; },
  setColumns:    (v) => { config.COLUMNS = v; },
  setCellWidth:  (v) => { config.CELL_WIDTH = v; },
  saveConfig:    () => saveConfig(config)
};

printHeader(config);

function ask() {
  rl.question("Type a command or search >> ", (input) => {
    const cmd = input.trim();

    if (!cmd) return ask();

    if (cmd.toLowerCase() === "/q") {
      console.log("Bye!");
      rl.close();
      return;
    }

    if (cmd.toLowerCase() === "getui") {
      printHeader(config);
      return ask();
    }

    // command handling (registry)
    const result = handleCommand(cmd.toLowerCase(), config, setters);
    if (result.done) {
      // print updated UI from current in-memory config
      console.log();
      printHeader(config);
      console.log(result.msg);
      console.log();
      return ask();
    }

    // normal search
    const results = searchByPrefix(cmd, config); // now takes config for possible optimizations
    const limited = results.slice(0, config.MAX_RESULTS);

    console.log(`\nHasil untuk "${cmd}" (menampilkan ${limited.length} dari ${results.length}):\n`);
    printResults(limited, config.COLUMNS, config.CELL_WIDTH, config.TABLE_MODE, truncate);
    console.log(`\nTotal hasil: ${results.length}\n`);

    ask();
  });
}

ask();
