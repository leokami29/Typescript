type ID = string | number;

function printID(id: ID): void {
  console.log(`ID: ${id}`);
}

printID("ABC123"); // Salida: "ID: ABC123"
printID(1001); // Salida: "ID: 1001"


interface Shape {
    kind: "circle" | "rectangle" | "triangle";  
    radius?: number; // Propiedad opcional para el círculo
    width?: number; // Propiedad opcional para el rectángulo
    altura?: number; // Propiedad opcional para el rectángulo
    base?: number; // Propiedad opcional para el triángulo
    height?: number; // Propiedad opcional para el triángulo
  }
  