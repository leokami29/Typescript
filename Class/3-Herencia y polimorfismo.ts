class Animall {
    constructor(public name: string) {}
  
    makeSound(): void {
      console.log("Haciendo sonido genérico...");
    }
  }
  
  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    makeSound(): void {
      console.log("Guau guau!");
    }
  }
  
  class Cat extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    makeSound(): void {
      console.log("Miau miau!");
    }
  }
  
  let dog = new Dog("Firulais");
  let cat = new Cat("Misi");
  dog.makeSound(); // Salida: "Guau guau!"
  cat.makeSound(); // Salida: "Miau miau!"
