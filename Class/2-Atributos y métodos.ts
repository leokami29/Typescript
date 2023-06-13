class Rectangle {
  private width: number; // Propiedad privada 'width' de tipo number
  private height: number; // Propiedad privada 'height' de tipo number

  constructor(width: number, height: number) {
      this.width = width; // Asigna el valor del parámetro 'width' a la propiedad 'width' de la instancia
      this.height = height; // Asigna el valor del parámetro 'height' a la propiedad 'height' de la instancia
  }

  getArea(): number {
      return this.width * this.height; // Retorna el área del rectángulo calculada multiplicando la anchura y la altura
  }
}

let rectangle = new Rectangle(5, 3); // Crea una instancia de la clase Rectangle con una anchura de 5 y una altura de 3
console.log(rectangle.getArea()); // Imprime en la consola el área del rectángulo, que es 15

// En resumen, este código define una clase Rectangle que representa un rectángulo. 
// Tiene propiedades privadas width y height, y un constructor que recibe los valores 
// de anchura y altura para inicializar las propiedades del rectángulo. La clase 
// también tiene un método getArea() que calcula y retorna el área del rectángulo 
// multiplicando la anchura por la altura. Luego, se crea una instancia de la clase 
// Rectangle con una anchura de 5 y una altura de 3, y se imprime el área del rectángulo
//  en la consola, que es 15.