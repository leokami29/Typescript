function func(name: string): void {
  console.log(`Hola, ${name}!`); // Imprime un saludo utilizando el nombre pasado como argumento
}

let sayHello: (name: string) => void = func; // Declaración de una variable 'sayHello' de tipo función que recibe un parámetro 'name' de tipo string y no devuelve nada. Se le asigna la función 'func'
sayHello("Juan"); // Llama a la función 'sayHello' pasando el argumento "Juan". Imprime: "Hola, Juan!"


// En resumen, este código define una función llamada func que recibe un parámetro name de tipo string 
// y no devuelve nada. La función imprime un saludo utilizando el nombre pasado como argumento. 
// Luego, se declara una variable sayHello que es de tipo función, 
// con la firma (name: string) => void, es decir, una función que recibe un parámetro de tipo string 
// y no devuelve nada. A esta variable se le asigna la función func. Finalmente, se llama a la función 
// sayHello pasando el argumento "Juan", lo cual imprime el saludo "Hola, Juan!".