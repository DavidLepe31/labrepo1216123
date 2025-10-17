import { add, divide, maxOfThree, fizzBuzz } from "../src/math.js";

test("add suma correctamente", () => {
  expect(add(2, 3)).toBe(5);
});

test("maxOfThree calcula el mayor de tres", () => {
  expect(maxOfThree(10, 5, 8)).toBe(10);
  expect(maxOfThree(1, 9, 3)).toBe(9);
});

test("fizzBuzz genera salida correcta hasta 5", () => {
  expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
});

// Este test sólo valida que la función existe; la división por 0 es un smell/bug a propósito
test("divide existe", () => {
  expect(() => divide(10, 2)).not.toThrow();
});
