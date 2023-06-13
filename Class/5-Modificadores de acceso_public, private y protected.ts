class Car {
    public brand: string; // Acceso público (por defecto)
    private color: string; // Acceso privado
    protected price: number; // Acceso protegido
  
    constructor(brand: string, color: string, price: number) {
      this.brand = brand;
      this.color = color;
      this.price = price;
    }
  
    startEngine(): void {
      console.log(`Starting ${this.brand} engine...`);
    }
  }
  
  let car = new Car("Toyota", "Blue", 20000);
  car.startEngine(); // Salida: "Starting Toyota engine..."
  console.log(car.brand); // Salida: "Toyota"
  console.log(car.color); // Error: Propiedad 'color' es privada
  console.log(car.price); // Error: Propiedad 'price' es protegida
  