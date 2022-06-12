import { isAbsolute, resolve } from "node:path";
import { existsSync, lstatSync } from "node:fs";
import { readStream } from "./until/readStream.js";

export const readAndPrintFile = async (currentDir, pathFileToRead) => {
  let tempPath;
  if (isAbsolute(pathFileToRead)) {
    tempPath = pathFileToRead;
  } else {
    tempPath = resolve(currentDir, pathFileToRead);
  }
  if (!existsSync(tempPath) || lstatSync(tempPath).isDirectory()) {
    return console.log("Invalid input");
  }

  const text = await readStream(tempPath);
  return console.log(text);
};
