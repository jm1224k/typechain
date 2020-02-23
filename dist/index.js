"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "mimi", age = 26, gender = "female";
const person = {
    name: "mimi",
    gender: "female",
    age: 24
};
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map