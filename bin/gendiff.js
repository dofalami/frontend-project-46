#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
//  .option('-f, --format <type>', 'output format', 'stylish')
//  .action((filepath1, filepath2, options) => {
//    console.log(genDiff(filepath1, filepath2, options.format));
//  });

program.parse(process.argv);
