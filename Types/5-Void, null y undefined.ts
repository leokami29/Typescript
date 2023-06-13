//Basico
function sayHello(): void {
  console.log("Hola"); // Función que no devuelve ningún valor (void)
}
let nullValue: null = null; // Declaración de una variable de tipo null
let undefinedValue: undefined = undefined; // Declaración de una variable de tipo undefined

//intermedio
function logError(message: string | undefined): void {
  if (message) {
    console.error(message);
  }
}
logError("Error occurred"); // Llamada a la función con un valor de string
logError(undefined); // Llamada a la función con valor undefined


//Avanzado
function getNull(): null {
  return null;
}
function getUndefined(): undefined {
  return undefined;
}
let nullableValue: number | null = getNull(); // Uso de un tipo de unión con null
let optionalValue: string | undefined = getUndefined(); // Uso de un tipo de unión con undefined

