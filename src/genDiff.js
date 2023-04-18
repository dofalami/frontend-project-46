import _ from 'lodash';
import fs from 'fs';
import path from 'path';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), 'utf-8');
const parseFile = (filepath) => JSON.parse(readFile(filepath));

export default (filepath1, filepath2) => {
  const unchanged = ' ';
  const added = '+';
  const deleted = '-';

  const file1 = parseFile(filepath1);
  const file2 = parseFile(filepath2);

  console.log(file1);
  console.log(file2);

  const sortedKeys = _.sortBy(Object.keys({ ...file1, ...file2 }));

  const gendiff = sortedKeys.map((key) => {
    if (!_.has(file2, key)) {
      console.log(`${deleted} ${key}: ${file1[key]}`); // follow
    }
    if (!_.has(file1, key)) {
      console.log(`${added} ${key}: ${file2[key]}`);
    }
    if (_.has(file1, key) && _.has(file2, key)) {
      file1[key] == file2[key]
        ? console.log(`${unchanged} ${key}: ${file1[key]}`)
        : console.log(`${deleted} ${key}: ${file1[key]}\n${added} ${key}: ${file2[key]}`);
    }
  });
};
