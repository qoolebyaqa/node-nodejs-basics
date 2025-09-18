import path from "path";
import os from "os";
import http from "http";
import { fileURLToPath } from "url";

const { release, version } = os;
const { createServer: createServerHttp } = http;

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = await import("./files/a.json", { assert: { type: "json" } });
} else {
  unknownObject = await import("./files/b.json", { assert: { type: "json" } });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${fileName}`);
console.log(`Path to current directory is ${dirName}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
