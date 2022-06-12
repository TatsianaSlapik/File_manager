import {
  createWriteStream,
  createReadStream,
  existsSync,
  lstatSync,
} from "node:fs";
import { parse } from "node:path";

export const copyFile = async (pathToCopyFile, pathToNewDirectory) => {
  if (!existsSync(pathToCopyFile) || lstatSync(pathToCopyFile).isDirectory()) {
    return console.log("Invalid input");
  }
  if (!existsSync(pathToNewDirectory)) {
    return console.log("Invalid input");
  }

  const fileName = parse(pathToCopyFile).base;
  let fileForNewDirectory = pathToNewDirectory;

  if (parse(pathToNewDirectory).ext === "") {
    fileForNewDirectory = pathToNewDirectory + fileName;
  }

  const writeStream = createWriteStream(fileForNewDirectory);
  writeStream.on("error", function () {
    console.log("Operation failed");
  });
  createReadStream(pathToCopyFile).pipe(writeStream);
};
