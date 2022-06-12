import { createWriteStream } from "node:fs";
import { resolve } from "node:path";

export const addNewFile = (currentDir, filename) => {
  const filePath = resolve(currentDir, filename);

  return createWriteStream(filePath).end();
};
