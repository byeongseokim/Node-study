import { odd, even } from "./var.mjs";

function checkStringOddOrEven(num) {
  if (num % 2) {
    return odd;
  }
  return even;
}

export default checkStringOddOrEven;
