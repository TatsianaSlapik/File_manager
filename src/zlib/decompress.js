import {
  createReadStream,
  createWriteStream,
  existsSync,
  lstatSync,
} from "node:fs";
import { createBrotliDecompress } from "node:zlib";
import { parse } from "node:path";

export const decompress = async (pathFileGz, pathFileToDecompress) => {
  if (!existsSync(pathFileGz) || lstatSync(pathFileGz).isDirectory()) {
    return console.log("Invalid input");
  }
  if (parse(pathFileGz).ext !== ".br") {
    return console.log("Invalid input");
  }
  const fileName = parse(pathFileGz).name;
  let fileForNewDirectory = pathFileToDecompress;

  if (parse(pathFileToDecompress).ext === "") {
    fileForNewDirectory = pathFileToDecompress + fileName + ".txt";
  }
  const fileContents = createReadStream(pathFileGz);
  const writeStream = createWriteStream(fileForNewDirectory);
  const unzip = createBrotliDecompress();

  fileContents.pipe(unzip).pipe(writeStream);
};
