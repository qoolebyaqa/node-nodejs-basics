import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";

const decompress = async () => {
  const rootPath = "src/zip/files";
  const pipe = promisify(pipeline);
  const source = createReadStream(`${rootPath}/archive.gz`);
  const destination = createWriteStream(`${rootPath}/fileToCompress.txt`);

  try {
    const gzip = zlib.createGunzip(source);
    await pipe(source, gzip, destination);
    console.log(`File has been compressed"`);
  } catch (err) {
    console.error("Decompression failed:", err);
  }
};

await decompress();
