import { unlink } from "node:fs";

export const deleteFile = async (pathToDeleteFile) => {
  return unlink(pathToDeleteFile, (err) => {
    if (err) {
      console.log("Operation failed");
    }
  });
};
