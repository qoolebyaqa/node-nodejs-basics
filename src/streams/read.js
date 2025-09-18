import { createReadStream } from "fs";

const read = async () => {
  const fileToReadPath = "src/streams/files/fileToRead.txt";
  const stream = createReadStream(fileToReadPath, { encoding: "utf8" });

  stream.pipe(process.stdout);
};

await read();
