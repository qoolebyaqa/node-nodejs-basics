import fs from "fs";

const remove = async () => {
  const filePathToDelete = "src/fs/files/fileToRemove.txt";
  try {
    if (!fs.existsSync(filePathToDelete)) {
      throw new Error("FS operation failed");
    }
    fs.rmSync(filePathToDelete);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
