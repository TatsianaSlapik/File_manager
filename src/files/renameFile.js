import { isAbsolute, resolve, dirname } from "node:path";
import { existsSync, rename } from "node:fs";

export const renameFile = async (pathRenameFile, newNameFile) => {
  const typeFile = pathRenameFile.split(".")[1];

  let tempPathNewName;

  let nameAndTypeFile = `${newNameFile}.${typeFile}`;

  if (isAbsolute(newNameFile)) {
    tempPathNewName = newNameFile;
  } else {
    tempPathNewName = resolve(dirname(pathRenameFile), nameAndTypeFile);
  }

  if (!existsSync(pathRenameFile)) {
    return console.log("Invalid input");
  }

  return rename(pathRenameFile, tempPathNewName, (err) => {
    if (err) {
      console.log("Operation failed");
    }
  });
};
