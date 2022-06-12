import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";

export const readStreamHash = (path) => {
  const typeHash = "sha256";
  const typeReturned = "hex";
  const hash = createHash(typeHash);
  const stream = createReadStream(path);
  stream.setEncoding("utf8");

  return new Promise((resolve, reject) => {
    let data = "";

    stream.on("data", (chunk) => (data += chunk));
    stream.on("end", () => resolve(hash.update(data).digest(typeReturned)));
  });
};
