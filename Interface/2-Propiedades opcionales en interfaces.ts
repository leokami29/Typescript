// Puedes hacer una propiedad opcional en una interfaz utilizando el operador de interrogación ?.
// Esto significa que esa propiedad puede estar presente o no en un objeto que implemente la interfaz.

interface Persono {
    name: string;
    año?: number; // Propiedad opcional
  }
  
  let person1: Persono = {
    name: "Juan",
  };
  
  let person2: Persono = {
    name: "María",
    año: 30,
  };
  