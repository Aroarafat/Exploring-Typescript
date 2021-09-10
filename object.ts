const city: string = 'Dhaka';
const fruits: string[] = ['lichi', 'banana', 'guava'];

type Person = {
    name: string,
    age: number,
    salary: number
}

const student: Person = {
    name: 'Shahos Beny',
    age: 115,
    salary: 4500
}
const employee: { name: string, age: number, salary: number } = {
    name: 'MonaBaby',
    age: 29,
    salary: 1000000
}

function getSalary(player: { name: string, salary: number }): number {
    return player.salary;
}

getSalary({ name: 'asifThePlayboy', salary: 50 });


function getSalary2(player: Person): number {
    return player.salary;
}