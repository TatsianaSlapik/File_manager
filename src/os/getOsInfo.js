import os, { EOL } from "node:os";
import { ERROR_OPERATION_TEXT } from "../constant/constantGeneral.js";
import {
  ARCHITECTURE,
  CPUS,
  HOMEDIR,
  USERNAME,
} from "../constant/constantOS.js";

export const getOsInfo = (command) => {
  let osCommand = command.slice(2);
  switch (osCommand) {
    case EOL: {
      console.log(JSON.stringify(os.EOL));
      break;
    }
    case CPUS: {
      console.log(os.cpus());
      break;
    }
    case HOMEDIR: {
      console.log(os.homedir());
      break;
    }
    case USERNAME: {
      console.log(os.userInfo().username);
      break;
    }
    case ARCHITECTURE: {
      console.log(os.arch());
      break;
    }
    default: {
      console.log(ERROR_OPERATION_TEXT);
    }
  }
};
