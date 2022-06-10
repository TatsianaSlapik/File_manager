import { existsSync } from "node:fs";
import { isAbsolute, resolve } from "node:path";

export const changeDirectory = (currentDir, path) => {
  let tempPath;
  if (isAbsolute(path)) {
    tempPath = path;
  } else {
    tempPath = resolve(currentDir, path);
  }
  if (!existsSync(tempPath)) {
    console.log("Invalid input");
    return currentDir;
  }
  return tempPath;
};
