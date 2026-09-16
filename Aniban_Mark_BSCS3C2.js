
// Object Literal #1
const school = {
    name: "Northwest Samar State University",
    location: "Samar"
};

// Object Literal #2
const subject = {
    name: "JavaScript",
    units: 3
};


//  VARIABLES (3)

let studentName = "Mark";
let studentAge = 18;
let studentSection = "BSCS";


// CLASS
class Person {

    //  ENCAPSULATION
    #age;

    //  CONSTRUCTOR
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    //  METHOD
    getAge() {
        return this.#age;
    }

   
    introduce() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.#age);
    }
}


// INHERITANCE
class Student extends Person {

    constructor(name, age, section) {
        super(name, age);
        this.section = section;
    }

    //  METHOD
    study() {
        console.log(this.name + " is studying " + subject.name + ".");
    }
}


// INHERITANCE

class Teacher extends Person {

    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    //  METHOD
    teach() {
        console.log(this.name + " is teaching " + this.subject + ".");
    }
}


//  POLYMORPHISM
class StudentAssistant extends Student {

    introduce() {
        console.log(
            "I am " + this.name +
            ", a student assistant from " + this.section + "."
        );
    }
}


// OBJECTS

const student1 = new Student("Mark", 23, "BSCS 3C");
const student2 = new Student("Ace", 19, "BSCS 3C");
const teacher1 = new Teacher("Mr. Ortiz", 24, "Mobile Programming");
const assistant1 = new StudentAssistant("Paul", 20, "BSCS 3C");


// ARRAYS

const students = [
    student1,
    student2,
    assistant1
];


// LOOP

console.log("===== STUDENTS =====");

for (let student of students) {
    student.introduce();
    student.study();
    console.log("----------------");
}


//  CONDITIONALS

console.log("===== AGE CHECK =====");

for (let student of students) {

    if (student.getAge() >= 18) {
        console.log(student.name + " is an adult.");
    } else {
        console.log(student.name + " is a minor.");
    }
}


// Another conditional

if (students.length >= 3) {
    console.log("There are enough students in the class.");
} else {
    console.log("The class needs more students.");
}


//  OBJECT

console.log("===== TEACHER =====");

teacher1.introduce();
teacher1.teach();


//  ENCAPSULATION 

console.log("===== ENCAPSULATION =====");

console.log(
    student1.name + "'s age is " +
    student1.getAge()
);

//  POLYMORPHISM

console.log("===== POLYMORPHISM =====");

const people = [
    student1,
    teacher1,
    assistant1
];

for (let person of people) {
    person.introduce();
}