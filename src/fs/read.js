import fs from "fs";

const read = async () => {
  const fileToRead = "src/fs/files/fileToRead.txt";
  try {
    if (!fs.existsSync(fileToRead)) throw new Error("FS Operation failed");
    const fileContent = fs.readFileSync(fileToRead).toString();
    console.log(fileContent);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
