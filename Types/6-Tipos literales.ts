//Basico
function printColor(color: "red" | "green" | "blue"): void {
  console.log(color);
}
printColor("red"); // Llamada a la función con un valor literal

//intermedio
type Operator = "+" | "-" | "*" | "/";
function calculate(a: number, b: number, operator: Operator): number {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      throw new Error("Invalid operator");
  }
}
console.log(calculate(5, 3, "*")); // Llamada a la función con un tipo literal como parámetro


//Avanzado
type HexColor = `#${string}`;
function validateColor(color: HexColor): boolean {
  // Lógica de validación
  return true;
}
validateColor("#FF0000"); // Llamada a la función con un tipo literal personalizado

