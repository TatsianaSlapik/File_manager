import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";

export const calculateHash = async (pathHashFile) => {
  const typeHash = "sha256";
  const typeReturned = "hex";
  const hash = createHash(typeHash);
  const readStream = createReadStream(pathHashFile);
  readStream.on("readable", function () {
    const content = readStream.read();
    if (content) {
      console.log(hash.update(content).digest(typeReturned));
    } else {
      console.log("Operation failed");
    }
  });
};
