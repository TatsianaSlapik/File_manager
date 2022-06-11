import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliCompress } from "node:zlib";

export const compress = async (pathFileToCompress, pathFileGz) => {
  const readStream = createReadStream(pathFileToCompress);
  const zlib = createBrotliCompress();
  const writeStream = createWriteStream(pathFileGz);

  readStream.pipe(zlib).pipe(writeStream);
};
