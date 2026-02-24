import fs from "fs/promises";
import path from 'path'
import { isFileExistAsync } from "../utils.js";

const copy = async () => {
  const filesPath = "src/fs/files";
  const newFolder = "src/fs/files_copy";
  const isValid =
    (await isFileExistAsync(filesPath)) && !(await isFileExistAsync(newFolder));
  if (isValid) {
    
    try {
      const files = await fs.readdir(filesPath);
      fs.mkdir(newFolder, { recursive: true });
      files.map(file => fs.copyFile(path.join(filesPath, file), path.join(newFolder, file)))
    } catch {
      throw new Error("FS operation failed");
    }
  } else {
    throw new Error("FS operation failed");
  }
};

await copy();
