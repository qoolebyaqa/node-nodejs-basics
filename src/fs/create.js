import fs from "fs";

const create = async () => {
  try {
    fs.writeFileSync("src/fs/files/fresh.txt", "I am fresh and young", {
      flag: "wx",
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
