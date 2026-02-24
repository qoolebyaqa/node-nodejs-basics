import os from "os";
import { Worker } from "worker_threads";
import path from "path";
import { fileURLToPath } from "url";

export const getDirname = (url) => {
  const __filename = fileURLToPath(url);
  return path.dirname(__filename);
};

export const FS_ERROR_MESSAGE = "FS operation failed";

const performCalculations = async () => {
  const __dirname = getDirname(import.meta.url);
  const NUM = 10;

  const workers = os.cpus().map(
    (_, i) =>
      new Promise((resolve) => {
        const worker = new Worker(path.join(__dirname, "worker.js"), {
          workerData: { num: NUM + i },
        });
        const result = { status: "error", data: null };

        worker.on("message", (data) => {
          result.status = "resolved";
          result.data = data;
        });

        worker.on("exit", () => resolve(result));
      })
  );

  const results = await Promise.all(workers);

  console.log(results);

  return results;
};

await performCalculations();
