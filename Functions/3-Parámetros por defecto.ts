function fun(name: string = "Anónimo"): void {
  console.log(`Hola, ${name}!`); // Imprime un saludo utilizando el nombre pasado como argumento o "Anónimo" si no se proporciona ninguno
}

fun(); // Llama a la función 'fun' sin pasar ningún argumento. Imprime: "Hola, Anónimo!"
fun("Juan"); // Llama a la función 'fun' pasando el argumento "Juan". Imprime: "Hola, Juan!"

// En resumen, este código define una función llamada
//  fun que recibe un parámetro name de tipo string
//   con un valor predeterminado de "Anónimo" en caso
//   de que no se proporcione ningún argumento.
//   La función imprime un saludo utilizando el nombre
//    pasado como argumento o "Anónimo" si no se proporciona
//     ninguno. Luego, se llama a la función fun sin
//      pasar ningún argumento, lo cual imprime el saludo
//       "Hola, Anónimo!", y se llama a la función fun
//        pasando el argumento "Juan", lo cual imprime el saludo "Hola, Juan!".
