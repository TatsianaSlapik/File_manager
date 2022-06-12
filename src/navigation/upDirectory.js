import { dirname } from "node:path";

export const upDirectory = (startDir) => {
  let newPath = dirname(startDir);
  return newPath;
};
