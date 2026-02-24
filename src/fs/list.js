import fs from "fs/promises";
import { isFileExistAsync } from "../utils.js";

const list = async () => {
  const targetPath = "src/fs/files";

  if (await isFileExistAsync(targetPath)) {
    const files = await fs.readdir(targetPath);
    console.log(files)
  } else {
    throw new Error("FS operation failed");
  }
};

await list();
