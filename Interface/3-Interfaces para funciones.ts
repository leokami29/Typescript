interface MathOperation {
    (a: number, b: number): number;
  }
  
  function addd(a: number, b: number): number {
    return a + b;
  }
  
  let sum: MathOperation = addd;
  let resulta: number = sum(5, 3); // result tendrá el valor 8
  