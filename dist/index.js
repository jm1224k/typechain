"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "mimi", age = 26, gender = "female";
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const kim = new Human("kim", 22, "female");
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi(kim));
//# sourceMappingURL=index.js.map