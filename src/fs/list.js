import fs from "fs";

const list = async () => {
  const srcDir = "src/fs/files";
  try {
    if (!fs.existsSync(srcDir)) {
      throw new Error("FS operation failed");
    }
    fs.readdir(srcDir, (err, files) => {
      if (err) {
        throw new Error("FS operation failed");
      }
      console.log(files);
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
