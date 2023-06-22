const name: string = 'Leonel'
let hpPoints: number | 'FULL' = 95;
const isAlive: boolean = true;

// name = 123; no se puede ya que es "name" tipo string

hpPoints = 'FULL'

console.log({
    name,
    hpPoints,
    isAlive,
})

export {}