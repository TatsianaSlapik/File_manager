import { createReadStream } from "node:fs";
import { isAbsolute, resolve } from "node:path";
import { existsSync } from "node:fs";

export const readAndPrintFile = (currentDir, pathFileToRead) => {
  let tempPath;
  if (isAbsolute(pathFileToRead)) {
    tempPath = pathFileToRead;
  } else {
    tempPath = resolve(currentDir, pathFileToRead);
  }
  if (!existsSync(tempPath)) {
    return console.log("Invalid input");
  }

  return createReadStream(tempPath).pipe(process.stdout);
};
