import { createWriteStream, createReadStream, unlinkSync } from "node:fs";

export const moveFile = async (pathToCopyFile, pathToNewDirectory) => {
  const readStream = createReadStream(pathToCopyFile);
  readStream.pipe(createWriteStream(pathToNewDirectory));
  readStream.on("end", function () {
    unlinkSync(pathToCopyFile);
  });
};
