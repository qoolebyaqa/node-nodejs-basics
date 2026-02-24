import fs from 'fs/promises'
import { isFileExistAsync } from '../utils.js';

const rename = async () => {
  const pathToFile = "src/fs/files/";
  const oldName = "wrongFilename.txt";
  const newName = "properFilename.md";

  if (
    await isFileExistAsync(`${pathToFile}${oldName}`) &&
    !(await isFileExistAsync(`${pathToFile}${newName}`))
  ) {
    fs.rename(pathToFile + oldName, pathToFile + newName, (err) => {
      if(err) {
        throw err
      }
    });
  } else {
    throw new Error("FS operation failed");
  }
};

await rename();
