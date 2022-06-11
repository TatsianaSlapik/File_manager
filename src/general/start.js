import { argv } from "node:process";
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

let rl = createInterface({ input, output });
let currentDir = homedir();

let waitForCommandInput = function (name) {
  console.log(`You are currently in ${currentDir}`);

  rl.question("> ", function (answer) {
    //console.log(answer.split(" ")[0]);

    switch (answer.split(" ")[0]) {
      case "up": {
        currentDir = upDirectory(currentDir);
        break;
      }
      case "cd": {
        currentDir = changeDirectory(currentDir, answer.split(" ")[1]);
        break;
      }
      case "ls": {
        listDirectory(currentDir);
        break;
      }
      case "cat": {
        readAndPrintFile(currentDir, answer.split(" ")[1]);
        break;
      }
      case "add": {
        addNewFile(currentDir, answer.split(" ")[1]);

        break;
      }
      case "rn": {
        renameFile(answer.split(" ")[1], answer.split(" ")[2]);
        break;
      }
      case "cp": {
        copyFile(answer.split(" ")[1], answer.split(" ")[2]);

        break;
      }
      case "mv": {
        moveFile(answer.split(" ")[1], answer.split(" ")[2]);
        break;
      }
      case "rm": {
        deleteFile(answer.split(" ")[1]);

        break;
      }
      case "os": {
        console.log("os");

        //osFunction();
        break;
      }
      case "hash": {
        console.log("hash");
        // hashFunction();
        break;
      }
      case "compress": {
        console.log("compress");
        // compressFunction();
        break;
      }
      case "decompress": {
        console.log("decompress");
        //  decompressFunction();
        break;
      }
      case ".exit": {
        console.log(`Thank you for using File Manager, ${name}!`);
        rl.close();
        return;
      }
      default: {
        console.log("Invalid input111");
      }
    }

    waitForCommandInput(name);
  });
};

export const start = () => {
  const name = argv.slice(2)[1].split("=")[1];
  console.log(`Welcome to the File Manager, ${name}!`);

  waitForCommandInput(name);
};
start();
