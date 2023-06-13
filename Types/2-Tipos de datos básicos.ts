//basico
let año: number = 25; // Declaración de una variable de tipo number
let nombre: string = "Juan"; // Declaración de una variable de tipo string
let esEstudiante: boolean = true; // Declaración de una variable de tipo boolean

//Intermedio
let numeros: number[] = [1, 2, 3, 4, 5]; // Declaración de un array de números
let nombres: Array<string> = ["Juan", "María", "Pedro"]; // Declaración de un array de strings utilizando el tipo genérico Array<string>


//Avanzados
let dato: unknown = 10; // Declaración de una variable de tipo unknown
if (typeof dato === "number") {
  let result: number = dato * 2; // Uso de una variable de tipo unknown con una verificación de tipo
}
