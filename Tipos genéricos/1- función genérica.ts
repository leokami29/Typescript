// Los tipos genéricos en TypeScript permiten crear componentes y funciones que sean reutilizables y flexibles, 
// ya que pueden trabajar con diferentes tipos de datos de manera segura. Los tipos genéricos se representan 
// mediante parámetros que actúan como marcadores de posición para tipos específicos.

// ¿Qué son los tipos genéricos y cómo se utilizan?
// Los tipos genéricos permiten crear componentes que funcionen con una amplia gama de tipos en lugar de un solo
//  tipo específico. Se utilizan dentro de ángulos (<>) y se colocan junto al nombre del componente o función.

// Ejemplo de función genérica:

function reverse<T>(array: T[]): T[] {
    return array.reverse();
  }
  
  let numbers = [1, 2, 3, 4, 5];
  let reversedNumbers = reverse(numbers); // reversedNumbers tiene el tipo number[] y contiene [5, 4, 3, 2, 1]
  
  let names = ["Juan", "María", "Pedro"];
  let reversedNames = reverse(names); // reversedNames tiene el tipo string[] y contiene ["Pedro", "María", "Juan"]

//   En este ejemplo, la función reverse utiliza un tipo genérico T para invertir un array. 
//   Esto permite que la función sea reutilizable con diferentes tipos de arrays.