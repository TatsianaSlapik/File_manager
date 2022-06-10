import { readdirSync } from "node:fs";

export const listDirectory = (startDir) => {
  console.log(startDir);
  console.log(readdirSync(startDir));
};
