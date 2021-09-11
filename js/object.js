"use strict";
const city = 'Dhaka';
const fruits = ['lichi', 'banana', 'guava'];
const student = {
    name: 'Shahos Beny',
    age: 115,
    salary: 4500
};
const employee = {
    name: 'MonaBaby',
    age: 29,
    salary: 1000000
};
function getSalary(player) {
    return player.salary;
}
getSalary({ name: 'asifThePlayboy', salary: 50 });
function getSalary2(player) {
    return player.salary;
}
