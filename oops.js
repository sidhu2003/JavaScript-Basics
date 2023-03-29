// object literals
const book1 = {
    title : "Game of Thrones",
    author : "George RR Martin",
    year : 2012,
    getSummary : ()=> {
        return `${this.title}was written by ${this.author} in the year ${this.year}`
    }
}

console.log(book1)

// constructor

function Book(title,author,year) {
    this.title = title
    this.author = author
    this.year = year 
}
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in year ${this.year}`
}

const book1 = new Book("john snow","Yigrette",1969)

console.log(book1.getSummary)

// inheritance 

function Book(title,author,year) {
    this.title = title
    this.author = author
    this.year = year 
}

function Mag(title,author,year,month) {
    Book.call(this,title,author,year)
    this.month = month
}

const mag1 = new Mag("CSE","Sidda",2023,"March")

console.log(mag1)

// classes 

class Book {
    constructor(title,author,year) {
        this.title = title
        this.author = author
        this.year = year
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in year ${this.year}`
    }
}

const book1 = new Book("Snow","heck","2089")

console.log(book1)

// subclasses 

class Mag extends Book {
    constructor(title,author,year,month){
        super(title,author,year)
        this.month = month
    }
}

const mag1 = new Mag("GOT","GRRM","2019","May")

console.log(mag1)