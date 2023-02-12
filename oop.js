// 1. Constructor function
function Person(firstName,lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// Instantiate object
const person1 = new Person('Siddardha','Rali','4-3-1990');
console.log(person1);
console.log(person1.firstName); // output : Siddardha

// Using Functions in Constructor

function Person(firstName,lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// prototype

function Person(firstName,lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// Get Birth Year
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

// Get Full Name

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate object

const person1 = new Person('Siddardha','Rali','4-3-1990');
console.log(person1);
console.log(person1.getBirthYear()); // output : 1990

// Class    // ES6

class Person {
    constructor(firstName,lastName,dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object

const person1 = new Person('Siddardha','Rali','4-3-1990');
console.log(person1);
console.log(person1.getBirthYear()); // output : 1990


