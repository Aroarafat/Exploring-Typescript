interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClubs?: string[]
}

const lebu: Player = {
    name: 'Luis lebu',
    club: 'Abahoni',
    salary: 12000,
    wife: 'Suraiya'
}
const Arafat: Player = {
    name: 'arafat',
    club: 'Kolabagan',
    salary: 20000
}
interface Employee {
    name: string,
    designation: string,
    salary: number
    age: number
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const zuku: Developer = {
    name: 'Zukerberg',
    salary: 1100,
    age: 31,
    designation: 'Facebooker',
    language: 'js',
    codeEditor: 'VS Code',
    typingSpeed: 65
}