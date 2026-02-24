import fs from "fs/promises";
import { isFileExistAsync } from "../utils.js";

const remove = async () => {
  const targetPath = "src/fs/files/fileToRemove.txt";

  if (await isFileExistAsync(targetPath)) {
    try {
      fs.rm(targetPath, { recursive: true });
    } catch {
      throw new Error("FS operation failed");
    }
  } else {
    throw new Error("FS operation failed");
  }
};

await remove();
