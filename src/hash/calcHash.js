import { createReadStream } from "fs";
import { createHash } from "crypto";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  const filePath = fileURLToPath(import.meta.url);
  const hash = createHash("sha256");

  const stream = createReadStream(filePath);
  stream.on("error", (err) => console.error("Error reading file:", err));
  stream.on("data", (chunk) => hash.update(chunk));
  stream.on("end", () => console.log(hash.digest("hex")));
};

await calculateHash();
