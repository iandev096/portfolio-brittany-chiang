import { hotjar } from "react-hotjar";
import { IS_PROD_MODE } from "./constants";

function initializeHotjar() {
  if (!IS_PROD_MODE) {
    return;
  }

  if (!process.env.HJID || !process.env.HJSV) {
    console.log("Environment variables not set");
    console.log("process.env.HJID::", process.env.HJID);
    console.log("process.env.HJSV::", process.env.HJSV);
  }

  const hjid = Number(process.env.HJID);
  const hjsv = Number(process.env.HJSV);

  hotjar.initialize(hjid, hjsv);
}

export default initializeHotjar;
