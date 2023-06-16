/* 
    Object
    {
        key: Value
    }
*/
// Define Object
const myObj = {
    firstName: "Zeeker", // Property
    lastName: "Code", // Property
    age: 24, // Property
    // Object in Object
    address: {
        province: "Bangkok",
        zipCode: "12020"
    },
    // Array in object
    hobbies: ["Game", "Music", "Coding"],
    "is active": false, // Property
    // Method is a property have value is function, And keyword this
    fullName: function() {
        return this.firstName + this.lastName;
    }
};

// Accessing Object
// console.log(myObj.firstName);
// console.log(myObj["is active"]);

// Assign Object
myObj.sayHi = "Hello World";
// console.log(myObj);

// Reassign Object
myObj.age = 28;
// console.log(myObj);

// Remove Property Object
delete myObj.sayHi;
// console.log(myObj);

// Accessing Object in Object
// console.log(myObj.address.province);

// Accessing array in object
// console.log(myObj.hobbies[0], myObj.hobbies[1], myObj.hobbies[2]);
// for (const key in myObj.hobbies) {
//     console.log(myObj.hobbies[key]);
// }

// Factory function
const makeCars = (brand, model, year) => {
    return {
        // brand: brand,
        // model: model,
        // year: year
        // Shorthand
        brand, // Like a brand: brand
        model, // Like a model: model
        year // Like a year: year
    }
}
const car1 = makeCars("Yotota", "Yapis", 2024);
// console.log(car1);
const car2 = makeCars("Yamoho", "Yoyo", 2025);
// console.log(car2);

// Check key in object
// console.log("firstName" in myObj); // true
// console.log("Kogogour" in myObj); // false

// Object for...in
// for (const key in myObj) {
//         console.log(myObj[key]);
// }

// Accessing object methods
console.log(myObj.fullName());