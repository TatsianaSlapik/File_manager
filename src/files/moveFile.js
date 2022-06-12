import {
  createWriteStream,
  createReadStream,
  unlinkSync,
  existsSync,
  lstatSync,
} from "node:fs";
import { parse } from "node:path";

export const moveFile = async (pathToCopyFile, pathToNewDirectory) => {
  const fileName = parse(pathToCopyFile).base;
  let fileForNewDirectory = pathToNewDirectory;

  if (parse(pathToNewDirectory).ext === "") {
    fileForNewDirectory = pathToNewDirectory + fileName;
  }
  if (!existsSync(pathToCopyFile) || lstatSync(pathToCopyFile).isDirectory()) {
    return console.log("Invalid input");
  }

  const readStream = createReadStream(pathToCopyFile);
  const writeStream = createWriteStream(fileForNewDirectory);

  writeStream.on("error", function () {
    console.log("Operation failed");
  });
  readStream.pipe(writeStream);
  readStream.on("end", function () {
    unlinkSync(pathToCopyFile);
  });
};
