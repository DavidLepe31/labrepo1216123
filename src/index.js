import { add, divide, maxOfThree, fizzBuzz } from "./math.js";

console.log("Suma 2 + 3 =", add(2, 3));
// Esto podría provocar Infinity si el divisor es 0 (issue que Sonar señalará):
console.log("Divide 10 / 0 =", divide(10, 0));

console.log("Máximo de (10, 5, 8) =", maxOfThree(10, 5, 8));
console.log("FizzBuzz(15) =", fizzBuzz(15).join(", "));
