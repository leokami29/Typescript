function multiplyNumbers(a: number, b: number) {
  return a * b; // Devuelve el producto de los dos números proporcionados como argumentos
}

let resulta: number = multiplyNumbers(2, 4); // Llama a la función 'multiplyNumbers' pasando los números 2 y 4 como argumentos. El resultado se asigna a la variable 'result'. El valor de 'result' será 8.

// En resumen, este código define una función llamada 
// multiplyNumbers que recibe dos parámetros a y b 
// de tipo number y devuelve el producto de los dos números. 
// Como no se especifica el tipo de retorno en la declaración 
// de la función, TypeScript infiere que el tipo de retorno 
// es number. Luego, se llama a la función multiplyNumbers 
// pasando los números 2 y 4 como argumentos, y el resultado 
// se asigna a la variable result, que tendrá el valor 8.