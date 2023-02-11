// template strings

const name = 'John';
const age = 30;

console.log(`My name is ${name} and I am ${age}`); // output : My name is John and I am 30

// string Methods 

const s = "Siddardha"

console.log(s.length); // output : 9
console.log(s.toUpperCase()); // output : SIDDARDHA
console.log(s.toLowerCase()); // output : siddardha
console.log(s.substring(0, 5)); // output : Sidda
console.log(s.substring(0, 5).toUpperCase()); // output : SIDDA
console.log(s.split('')); // output : [ 'S', 'i', 'd', 'd', 'a', 'r', 'd', 'h', 'a' ]

// Arrays - variables that hold multiple values

// Array Methods

const fruits = ['apples', 'oranges', 'pears', 'grapes'];

fruits[4] = 'mangoes'; // add a value to the array

fruits.push('strawberries'); // add a value to the end of the array

fruits.unshift('blueberries'); // add a value to the beginning of the array

fruits.pop(); // remove the last value of the array

console.log(Array.isArray(fruits)); // output : true

console.log(fruits.indexOf('oranges')); // output : 1

// Object Literals

const person = {
    firstName: 'Siddardha',
    lastName: 'Rali',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName, person.lastName); // output : Siddardha Rali

console.log(person.hobbies[1]); // output : movies

console.log(person.address.city); // output : Boston

const { firstName, lastName, address: { city } } = person; // destructuring

console.log(city); // output : Boston

person.email = 'sidhu@gmail.com'; // output :

console.log(person); // output : { firstName: 'Siddardha', lastName: 'Rali', age: 30, hobbies: [ 'music', 'movies', 'sports' ], address: { street: '50 main st', city: 'Boston', state: 'MA' }, email: '

const todos = [
    {
        id: 1,  
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos[1].text); // output : Meeting with boss

// JSON - JavaScript Object Notation

const todoJSON = JSON.stringify(todos);

console.log(todoJSON); // output : [{"id":1,"text":"Take out trash","isCompleted":true},{"id":2,"text":"Meeting with boss","isCompleted":true},{"id":3,"text":"Dentist appt","isCompleted":false}]

// For Loop

for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// While Loop

let i = 0;

while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}   

// Looping through Arrays

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}   // output : Take out trash Meeting with boss Dentist appt

// For of Loop  

for(let todo of todos) {
    console.log(todo.id);
}   // output : 1 2 3

// High Order Array Methods - forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text);
});

// Map

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText); // output : [ 'Take out trash', 'Meeting with boss', 'Dentist appt' ]

// Filter

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted); // output : [ { id: 1, text: 'Take out trash', isCompleted: true }, { id: 2, text: 'Meeting with boss', isCompleted: true } ]

// Conditionals

const x = 10;

if(x === 10) {
    console.log('x is 10');
}

// ternary operator

const color = x > 10 ? 'red' : 'blue';

console.log(color); // output : blue

// Switches

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

// Functions

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5, 5)); // output : 10

// Arrow Functions

const addNums2 = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums2(5, 5)); // output : 10
      









