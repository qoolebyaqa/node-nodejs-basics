import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

const decompress = async () => {
  const originFile = 'src/zip/files/archive.gz';
  const resultFile = 'src/zip/files/fileToCompress.txt';

  const readStream = createReadStream(originFile);
  const writeStream = createWriteStream(resultFile);

  readStream.pipe(createUnzip()).pipe(writeStream);
};

await decompress();
