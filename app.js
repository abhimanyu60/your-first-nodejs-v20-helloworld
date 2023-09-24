import caculator from "./src/caculator.mjs";
import * as caculatorAs from "./src/caculator.mjs";

const result = caculator.add(4, 2);
console.dir(result);
// caculator.subtract(4, 2);
const result2 = caculatorAs.subtract(4, 2);
console.dir(result2);
