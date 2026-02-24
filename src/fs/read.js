import fs from 'fs/promises'

const read = async () => {
  const targetPath = 'src/fs/files/fileToRead.txt'
  try {
    const content = await fs.readFile(targetPath, { encoding: 'utf-8' });
    console.log(content)
  } catch {
    throw new Error ('FS operation failed')
  }
};

await read();
