function double(value: number): number;
function double(value: string): string;
function double(value: number | string): number | string {
  if (typeof value === "number") {
    return value * 2; // Si el valor es de tipo number, se devuelve el valor multiplicado por 2
  } else if (typeof value === "string") {
    return value + value; // Si el valor es de tipo string, se devuelve el valor concatenado consigo mismo
  }

  // Instrucción 'return' final añadida para manejar cualquier otro tipo de valor
  return value; // Si el valor no es de tipo number ni de tipo string, se devuelve el mismo valor sin cambios
}

let result1: number = double(5); // result1 tendrá el valor 10, se llama a la versión de la función para valores numéricos
let result2: string = double("Hola"); // result2 tendrá el valor "HolaHola", se llama a la versión de la función para valores de cadena


// En resumen, este código define una función llamada double que acepta un parámetro de tipo number o string. 
// La función tiene múltiples sobrecargas de tipo para permitir el uso de diferentes tipos de entrada. 
// Si el valor es de tipo number, se devuelve el valor multiplicado por 2. Si el valor es de tipo string, 
// se devuelve el valor concatenado consigo mismo. Si el valor no es de ninguno de estos dos tipos, 
// se devuelve el mismo valor sin cambios. Luego, se llaman a la función double con diferentes 
// argumentos (5 y "Hola") y se asignan los resultados a las variables result1 y result2 respectivamente.