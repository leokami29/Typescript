class Animal {
  constructor(public name: string) {} // Constructor de la clase Animal que recibe un parámetro 'name' y lo asigna a la propiedad 'name' de la instancia

  sayHello(): void {
      console.log(`Hola, soy un animal llamado ${this.name}`); // Imprime un mensaje en la consola que incluye el nombre del animal
  }
}

let animal = new Animal("Firulais"); // Crea una instancia de la clase Animal con el nombre "Firulais"
animal.sayHello(); // Llama al método sayHello() en la instancia 'animal', lo cual imprime un mensaje en la consola con el nombre del animal


// En resumen, este código es un ejemplo de programación en TypeScript 
// que define una clase Animal con una propiedad name y un método sayHello(). 
// Luego, crea una instancia de la clase Animal con el nombre "Firulais" y 
// llama al método sayHello() para mostrar un mensaje en la consola con el nombre del animal.