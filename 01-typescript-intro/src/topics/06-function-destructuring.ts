
interface Product{
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


function taxCalculation( options: TaxCalculationOptions ): number[] {
    let total = 0;
    options.products.forEach( product => {
        total += product.price
    })
}

 
const shopinCart = [phone, tablet];
const tax = 0.25





export{}