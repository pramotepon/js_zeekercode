/* 
    Classes
*/
// Basic class
// class MyFirstClass {
//     name = "ZeekerCode";
//     word = "Hello World";

//     sayHello() {
//         return this.word;
//     }
// }
// Access Properties and methods
// const firstClass = new MyFirstClass();
// Access Properties
// console.log(firstClass.name);
// console.log(firstClass.sayHello());

// Class Constructor
// class MyFirstClass {
//     constructor(name, word) {
//         this.name = name;
//         this.word = word;
//     }

//     sayHello() {
//         return this.word;
//     }
// }
// Access
// const firstClass = new MyFirstClass("ZeekerCode", "Hello Zeeker");
// console.log(firstClass.sayHello());


// Class Inheritance (การสืบทอด class)
// class SubClass extends MyFirstClass {
//     constructor(name, word) {
//         super(name, word)
//     }
//     sayName(){
//         return this.name;
//     }
// }
// const mySubClass = new SubClass("Subname", "Hello Sub")
// console.log(mySubClass.sayHello());

// console.log(mySubClass.sayName());

// Static Methods
// class MyFirstClass {
//     constructor(name, word) {
//         this.name = name;
//         this.word = word;
//     }

//     sayHello() {
//         return this.word;
//     }

//     static goodBye() {
//         return 'Bye bye'
//     }
// }
// console.log(MyFirstClass.goodBye());

// Getter Setter
// class MyFirstClass {
//     constructor(name, word) {
//         this.name = name;
//         this.word = word;
//     }
//     // Getter
//     get sayHello() {
//         return this.word;
//     }
//     // Setter
//     set finalWord(word){
//         this.word += word;
//     }

//     static goodBye() {
//         return 'Bye bye'
//     }
// }
// const firstClass = new MyFirstClass("ZeekerCode", "Hello Zeeker");
// // Getter
// console.log(firstClass.sayHello);
// firstClass.finalWord = "Code" // Hello ZeekerCode
// console.log(firstClass.sayHello);

/*
    Modules
*/
// Export
let a = "Hello World"
class MyFirstClass {
    constructor(name, word) {
        this.name = name;
        this.word = word;
    }
    // Getter
    get sayHello() {
        return this.word;
    }
    // Setter
    set finalWord(word) {
        this.word += word;
    }

    static goodBye() {
        return 'Bye bye'
    }
}

export { a, MyFirstClass };
// export default a;