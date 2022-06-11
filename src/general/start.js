import { argv } from "node:process";
import { BYE_TEXT, HELLO_TEXT } from "../constant/constantGeneral.js";
import { waitForCommandInput } from "./waitForCommandInput.js";

export const start = () => {
  const name = argv.slice(2)[1].split("=")[1];
  console.log(`${HELLO_TEXT} ${name}!`);

  waitForCommandInput(name);

  process.on("exit", function () {
    console.log(`${BYE_TEXT} ${name}!`);
  });
};
start();
