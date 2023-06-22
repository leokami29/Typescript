const skills: string[] =['Bash','Counter','Help'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometwon?: string;
}

const strider: Character = {
    name:'strider',
    hp: 20,
    skills:['Bash', 'Counter']
}

strider.hometwon = 'Rivendell'

console.table(strider)

export {}