import { createReadStream } from "node:fs";

export const readStream = (path) => {
  const stream = createReadStream(path);
  stream.setEncoding("utf8");

  return new Promise((resolve, reject) => {
    let data = "";

    stream.on("data", (chunk) => (data += chunk));
    stream.on("end", () => resolve(data));
  });
};
