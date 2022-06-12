import os from "node:os";
import { ERROR_OPERATION_TEXT } from "../constant/constantGeneral.js";
import {
  ARCHITECTURE,
  CPUS,
  EOL_COMMAND,
  HOMEDIR,
  USERNAME,
} from "../constant/constantOS.js";
import { getCpus } from "./getCpus.js";

export const getOsInfo = (command) => {
  let osCommand = command.slice(2);
  switch (osCommand) {
    case EOL_COMMAND: {
      console.log(JSON.stringify(os.EOL));
      break;
    }
    case CPUS: {
      console.log(getCpus());
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
