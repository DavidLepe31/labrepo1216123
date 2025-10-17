// Algunas decisiones dudosas a propósito para que Sonar marque issues:

export function add(a, b) {
  // variable innecesaria (smell)
  const result = a + b;
  return result;
}

export function divide(a, b) {
  // Falta manejo de error por división entre 0 (bug potencial)
  return a / b;
}

// Código duplicado (smell): estas dos funciones hacen básicamente lo mismo
export function maxOfThree(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

export function greatestOfThree(x, y, z) {
  if (x >= y && x >= z) return x;
  if (y >= x && y >= z) return y;
  return z;
}

// Complejidad (smell) algo innecesaria:
export function fizzBuzz(n) {
  let out = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) out.push("FizzBuzz");
    else if (i % 3 === 0) out.push("Fizz");
    else if (i % 5 === 0) out.push("Buzz");
    else out.push(String(i));
  }
  return out;
}
