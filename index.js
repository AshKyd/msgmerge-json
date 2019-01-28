#!/usr/bin/env node
const program = require("commander");
const fs = require("fs");
const path = require("path");
const msgMerge = require("./src/index.js");

program
  .version(require("./package.json").version)
  .usage("[options] <srcFile> <destFiles ...>")
  .parse(process.argv);

const arguments = [...program.args];
const srcFilename = arguments.shift();
const destFileNames = arguments;

function loadFile(fileName) {
  const resolvedFilename = path.resolve(process.cwd(), fileName);
  return require(resolvedFilename);
}

const srcFile = loadFile(srcFilename);

destFileNames.forEach(destFileName => {
  const destFile = loadFile(destFileName);
  const newDest = msgMerge(srcFile, destFile);
  fs.writeFileSync(destFileName, JSON.stringify(newDest, null, 2));
});
