import { hotjar } from "react-hotjar";
import { IS_PROD_MODE } from "./constants";

console.log("process.env::", process.env);
console.log("process.env.NODE_ENV::", process.env.NODE_ENV);

function initializeHotjar() {
  if (!IS_PROD_MODE) {
    return;
  }

  if (!process.env.NEXT_PUBLIC_HJID || !process.env.NEXT_PUBLIC_HJSV) {
    console.log("Environment variables not set");
    console.log("process.env.HJID::", process.env.NEXT_PUBLIC_HJID);
    console.log("process.env.HJSV::", process.env.NEXT_PUBLIC_HJSV);
  }

  const hjid = Number(process.env.NEXT_PUBLIC_HJID);
  const hjsv = Number(process.env.NEXT_PUBLIC_HJSV);

  hotjar.initialize(hjid, hjsv);
}

export default initializeHotjar;
