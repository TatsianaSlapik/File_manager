import { existsSync, lstatSync } from "node:fs";
import { readStreamHash } from "../files/until/readStreamHash.js";

export const calculateHash = async (pathHashFile) => {
  if (!existsSync(pathHashFile) || lstatSync(pathHashFile).isDirectory()) {
    return console.log("Invalid input");
  }
  const hash = await readStreamHash(pathHashFile);

  return console.log(hash);
};
