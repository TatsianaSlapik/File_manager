import {
  createReadStream,
  createWriteStream,
  existsSync,
  lstatSync,
} from "node:fs";
import { createBrotliCompress } from "node:zlib";
import { parse } from "node:path";

export const compress = async (pathFileToCompress, pathFileGz) => {
  if (
    !existsSync(pathFileToCompress) ||
    lstatSync(pathFileToCompress).isDirectory()
  ) {
    return console.log("Invalid input");
  }
  const fileName = parse(pathFileToCompress).base;
  let fileForNewDirectory = pathFileGz;

  if (parse(pathFileGz).ext === "") {
    fileForNewDirectory = pathFileGz + fileName + ".br";
  }

  const readStream = createReadStream(pathFileToCompress);
  const zlib = createBrotliCompress();
  const writeStream = createWriteStream(fileForNewDirectory);

  readStream.pipe(zlib).pipe(writeStream);
};
