
export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description:'samsung galaxy s21',
    price: 50,
}

const tablet: Product = {
    description: 'apple ipad pro',
    price: 798.43,
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}



// function taxCalculation( options: TaxCalculationOptions ): [number, number] {
// function taxCalculation( {tax, products}: TaxCalculationOptions ): [number, number] {
export function taxCalculation( options: TaxCalculationOptions ): [number, number] {

    const {tax, products} = options

    let total = 0;
    products.forEach( ({price}) => {
        total = total + price
        total += price
    })

    return [total, total * tax]
}

 
// const shopinCart = [phone, tablet];
// const tax = 0.15


// const [total, taxTotal] = taxCalculation({
//     tax, 
//     products : shopinCart
// })

// console.log('Total', total) 
// console.log('Tax', taxTotal) 
