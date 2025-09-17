import fs from "fs";

const copy = async () => {
  const sourceDir = "src/fs/files";
  const destDir = "src/fs/files_copy";
  try {
    if (!fs.existsSync(sourceDir)) {
      throw new Error("FS operation failed");
    }
    if (fs.existsSync(destDir)) {
      throw new Error("FS operation failed");
    }
    fs.mkdirSync(destDir);
    fs.readdir(sourceDir, (err, files) => {
      if (err) throw new Error("FS operation failed");
      files.forEach((file) =>
        fs.copyFile(`${sourceDir}/${file}`, `${destDir}/${file}`, (err) => {
          if (err) throw new Error("FS operation failed");
        })
      );
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
