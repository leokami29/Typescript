function greett(name?: string): void {
  if (name) {
    console.log(`Hola, ${name}!`); // Imprime un saludo utilizando el nombre pasado como argumento si existe
  } else {
    console.log("Hola, ¿cómo estás?"); // Imprime un saludo genérico si no se proporciona un nombre
  }
}

greett(); // Llama a la función 'greett' sin pasar ningún argumento. Imprime: "Hola, ¿cómo estás?"
greett("Juan"); // Llama a la función 'greett' pasando el argumento "Juan". Imprime: "Hola, Juan!"


// En resumen, este código define una función llamada greett que recibe un parámetro opcional name 
// de tipo string y no devuelve nada. Dentro de la función, se verifica si se proporcionó un nombre. 
// Si se proporciona, se imprime un saludo utilizando el nombre. Si no se proporciona un nombre, 
// se imprime un saludo genérico. Luego, se llaman a la función greett sin pasar ningún argumento y 
// se llama a la función greett pasando el argumento "Juan", lo cual imprime los saludos correspondientes.