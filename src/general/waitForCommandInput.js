import { homedir } from "node:os";
import { createInterface } from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { upDirectory } from "../navigation/upDirectory.js";
import { listDirectory } from "../navigation/listDirectory.js";
import { changeDirectory } from "../navigation/changeDirectory.js";
import { readAndPrintFile } from "../files/readAndPrintFile.js";
import { addNewFile } from "../files/addNewFile.js";
import { renameFile } from "../files/renameFile.js";
import { copyFile } from "../files/copyFile.js";
import { deleteFile } from "../files/deleteFile.js";
import { moveFile } from "../files/moveFile.js";
import { calculateHash } from "../hash/calculateHash.js";
import { compress } from "../zlib/compress.js";
import { decompress } from "../zlib/decompress.js";
import { getOsInfo } from "../os/getOsInfo.js";
import {
  ADD,
  CAT,
  CD,
  COMPRESS,
  CP,
  DECOMPRESS,
  EXIT,
  HASH,
  INVALID_INPUT_TEXT,
  LS,
  MV,
  OS,
  RM,
  RN,
  UP,
} from "../constant/constantGeneral.js";

let currentDir = homedir();
let rl = createInterface({ input, output });

export const waitForCommandInput = (name) => {
  console.log(`You are currently in ${currentDir}`);

  rl.question("> ", async function (answer) {
    const userCommand = answer.split(" ")[0];
    const arg1 = answer.split(" ")[1];
    const arg2 = answer.split(" ")[2];

    switch (userCommand) {
      case UP: {
        currentDir = upDirectory(currentDir);
        break;
      }
      case CD: {
        currentDir = changeDirectory(currentDir, arg1);
        break;
      }
      case LS: {
        listDirectory(currentDir);
        break;
      }
      case CAT: {
        await readAndPrintFile(currentDir, arg1);
        break;
      }
      case ADD: {
        addNewFile(currentDir, arg1);
        break;
      }
      case RN: {
        renameFile(arg1, arg2);
        break;
      }
      case CP: {
        copyFile(arg1, arg2);
        break;
      }
      case MV: {
        moveFile(arg1, arg2);
        break;
      }
      case RM: {
        deleteFile(arg1);
        break;
      }
      case OS: {
        getOsInfo(arg1);
        break;
      }
      case HASH: {
        await calculateHash(arg1);
        break;
      }
      case COMPRESS: {
        compress(arg1, arg2);
        break;
      }
      case DECOMPRESS: {
        decompress(arg1, arg2);
        break;
      }
      case EXIT: {
        rl.close();
        return;
      }
      default: {
        console.log(INVALID_INPUT_TEXT);
      }
    }

    waitForCommandInput(name);
  });
};
