import { unlinkSync, existsSync } from "node:fs";

export const deleteFile = async (pathToDeleteFile) => {
  if (!existsSync(pathToDeleteFile)) {
    return console.log("Operation failed");
  }
  return unlinkSync(pathToDeleteFile);
};
