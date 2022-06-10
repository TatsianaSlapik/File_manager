import { argv } from "node:process";
import { homedir } from "node:os";
import { createInterface } from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { upDirectory } from "../navigation/upDirectory.js";
import { listDirectory } from "../navigation/listDirectory.js";
import { changeDirectory } from "../navigation/changeDirectory.js";
import { readAndPrintFile } from "../files/readAndPrintFile.js";

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
        console.log("cat");
        readAndPrintFile(answer.split(" ")[1]);
        // readFileFunction();
        break;
      }
      case "add": {
        console.log("add");

        // addFileFunction();
        break;
      }
      case "rn": {
        console.log("rn");

        // changeNameFunction();
        break;
      }
      case "cp": {
        console.log("cp");

        //copyFileFunction();
        break;
      }
      case "mv": {
        console.log("mv");
        // moveFileFunction();
        break;
      }
      case "delete": {
        console.log("delete");

        // deleteFileFunction();
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
