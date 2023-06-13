interface Person {
    name: string;
    age: number;
  }
  
  let person: Person = {
    name: "Juan",
    age: 25,
  };

  // En este código, se define una interfaz llamada Person que 
  // describe la estructura de un objeto que tiene una 
  // propiedad name de tipo string y una propiedad age de tipo number. 
  // Luego, se declara una variable person de tipo Person 
  // y se asigna un objeto que cumple con la estructura 
  // definida por la interfaz. En este caso, el objeto tiene el 
  // nombre "Juan" y una edad de 25.


//   También puedes utilizar una interfaz para definir el tipo de una función.

interface AddFunction {
    (a: number, b: number): number;
  }
  
  let add: AddFunction = (a, b) => {
    return a + b;
  };
  
  let result: number = add(5, 3); // result tendrá el valor 8
  

  // En este código, se define una interfaz llamada AddFunction 
  // que describe el tipo de una función que recibe dos parámetros 
  // a y b de tipo number y devuelve un valor de tipo number. 
  // Luego, se declara una variable add de tipo AddFunction y 
  // se le asigna una función que suma los dos números recibidos 
  // como argumentos. Por último, se llama a la función add pasando 
  // los números 5 y 3, y el resultado se asigna a la variable result, 
  // que tendrá el valor 8  