import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";

const compress = async () => {
  const rootPath = "src/zip/files";
  const pipe = promisify(pipeline);
  try {
    const source = createReadStream(`${rootPath}/fileToCompress.txt`);
    const destination = createWriteStream(`${rootPath}/archive.gz`);
    const gzip = zlib.createGzip();

    await pipe(source, gzip, destination);
    console.log(`File has been compressed"`);
  } catch (err) {
    console.error("Compression failed:", err);
  }
};

await compress();
