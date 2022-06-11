import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliDecompress } from "node:zlib";

export const decompress = async (pathFileGz, pathFileToDecompress) => {
  const fileContents = createReadStream(pathFileGz);
  const writeStream = createWriteStream(pathFileToDecompress);
  const unzip = createBrotliDecompress();

  fileContents.pipe(unzip).pipe(writeStream);
};
