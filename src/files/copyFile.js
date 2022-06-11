import { createWriteStream, createReadStream } from "node:fs";

export const copyFile = async (pathToCopyFile, pathToNewDirectory) => {
  return createReadStream(pathToCopyFile)
    .pipe(createWriteStream(pathToNewDirectory))
    .end();
};
