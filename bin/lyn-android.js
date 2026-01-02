#!/usr/bin/env node
import runDoctor from "./utils/doctor.js";
import runNew from "./utils/new.js";
import { Command } from "commander";
import getVersion from "./utils/getVersion.js";
function cli() {
  const program = new Command();
  program.name("lyn-android").version(getVersion());
  program.command("new <name>").action((name) => {
    runNew(name);
  });
  program.command("doctor").action(() => {
    runDoctor();
  });
  program.parse(process.argv);
}
cli();
