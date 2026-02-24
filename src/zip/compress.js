import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
  const originFile = 'src/zip/files/fileToCompress.txt';
  const resultFile = 'src/zip/files/archive.gz';

  const readStream = createReadStream(originFile);
  const writeStream = createWriteStream(resultFile);

  readStream.pipe(createGzip()).pipe(writeStream);

};

await compress();
