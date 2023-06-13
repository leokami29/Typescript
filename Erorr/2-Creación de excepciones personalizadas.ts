class CustomError extends Error {
  constructor(message: string) {
      super(message); // Llama al constructor de la clase padre (Error) y le pasa el mensaje de error
      this.name = "CustomError"; // Establece el nombre de la instancia de error como "CustomError"
  }
}

function validateNumber(value: number): void {
  if (value < 0) {
      throw new CustomError("El número no puede ser negativo"); // Lanza una instancia de CustomError con un mensaje de error personalizado
  }
}

try {
  validateNumber(-5); // Llama a la función validateNumber con un valor negativo
} catch (error) {
  if (error instanceof CustomError) {
      console.log("Error personalizado:", error.message); // Imprime el mensaje de error personalizado si el error es una instancia de CustomError
  } else {
      console.log("Ocurrió un error:", error); // Imprime el error general si no es una instancia de CustomError
  }
}

// En resumen, este código muestra cómo crear y lanzar un error personalizado utilizando una clase CustomError
// que extiende la clase base Error. La función validateNumber verifica si un número es negativo y, 
// en caso afirmativo, lanza una instancia de CustomError con un mensaje de error personalizado. Luego, se 
// utiliza un bloque try-catch para capturar cualquier error que se genere. Si el error capturado es una instancia 
// de CustomError, se imprime el mensaje de error personalizado. De lo contrario, se imprime el error general. 
// En este caso, al ejecutar el código, se lanzará y capturará un CustomError con el mensaje 
// "El número no puede ser negativo" y se imprimirá el mensaje de error personalizado.