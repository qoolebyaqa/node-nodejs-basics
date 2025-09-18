import { fileURLToPath } from "url";
import { createWriteStream } from "fs";
import { join, dirname } from "path";

const write = async () => {
  const fileToWritePath = "src/streams/files/fileToWrite.txt";
  const writableStream = createWriteStream(fileToWritePath);

  process.stdin.pipe(writableStream);
};

await write();
