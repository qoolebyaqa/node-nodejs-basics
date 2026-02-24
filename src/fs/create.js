import fs from 'fs/promises'

const create = async () => {
  const targetPath = 'src/fs/files/fresh.txt'
  try {
    fs.writeFile(targetPath, 'I am fresh and young', { flag: wx })
  } catch {
    throw new Error ('FS operation failed')
  }
};

await create();
