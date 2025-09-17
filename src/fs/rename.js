import fs from "fs";

const rename = async () => {
  const srcDir = "src/fs/files";
  try {
    if (
      !fs.existsSync(`${srcDir}/wrongFilename.txt`) ||
      fs.existsSync(`${srcDir}/properFilename.md`)
    ) {
      throw new Error("FS operation failed");
    }
    fs.renameSync(`${srcDir}/wrongFilename.txt`, `${srcDir}/properFilename.md`);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
