import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
  {
    description: "shoes",
    price: 123,
  },
  {
    description: "clothes",
    price: 45.98,
  },
  {
    description: "books",
    price: 78.99,
  },
];

const [total, tax] = taxCalculation({ products: shoppingCart, tax: 0.15 });

console.log("Total", total);
console.log("Tax", tax);
