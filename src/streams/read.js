import fs from "fs";
import { isFileExistAsync } from '../utils.js'

const read = async () => {
const pathFileToRead = "src/streams/files/fileToRead.txt";
  if (isFileExistAsync(pathFileToRead)) {
    const stream = fs.createReadStream("src/fs/files/fileToRead.txt", {
      encoding: "utf-8",
    });
    stream.pipe(process.stdout);
  } else {
    throw new Error("FS operation failed");
  }
};

await read();
