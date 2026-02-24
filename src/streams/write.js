import fs from "fs";
import { isFileExistAsync } from "../utils.js";

const write = async () => {
  const pathToFile = "src/streams/files/fileToWrite.txt";
  if (isFileExistAsync(pathToFile)) {
    const stream = fs.createWriteStream(pathToFile, {encoding: 'utf-8'});
    process.stdin.pipe(stream)
  } else {
    throw new Error('FS operation failed')
  }
};

await write();
