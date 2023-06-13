// Es posible aplicar restricciones a los tipos genéricos para limitar los tipos que se pueden utilizar en ellos. 
// Esto se logra mediante el uso de palabras clave como extends seguido de una restricción de tipo.

// Ejemplo de restricción en un tipo genérico:

interface Lengthy {
    length: number;
  }
  
  function getLength<T extends Lengthy>(item: T): number {
    return item.length;
  }
  
  let text = "Hola";
  let textLength = getLength(text); // textLength tiene el tipo number y contiene 4
  
  let numberss = [1, 2, 3, 4, 5];
  let numbersLength = getLength(numberss); // numberssLength tiene el tipo number y contiene 5
  
// En este ejemplo, la función getLength utiliza un tipo genérico T
// restringido a objetos que tengan una propiedad length de tipo number. 
// Esto garantiza que los argumentos pasados a la función tengan una propiedad length válida.

//   Las restricciones en los tipos genéricos ayudan a garantizar la compatibilidad de tipos 
//   y permiten trabajar con propiedades o métodos específicos de los tipos restringidos.