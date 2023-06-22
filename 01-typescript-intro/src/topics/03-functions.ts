

// function addNumber(a: number, b: number): number {
//     return a + b
// }



// const addnumberArrow = (a: number, b:number): string => {
//     return `${a + b}`
// }


// function multiply(fristNumber: number, secodnNumber?:number, base:number=2){
//     return fristNumber * base;
// }


// const result: number =  addNumber(1, 2)
// const result2: string =  addnumberArrow(1, 2)
// const multiplyResult: number =  multiply(5)

// console.log({result, result2, multiplyResult})

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

strider.showHp();
healCharacter(strider, 10);
strider.showHp();

export {}