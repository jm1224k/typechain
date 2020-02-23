const name = "mimi",
  age = 26,
  gender = "female"

class Human {
  public name: string
  public age: number
  public gender: string
  constructor(name: string, age: number, gender: string) {
    this.name = name
    this.age = age
    this.gender = gender
  }
}

const kim = new Human("kim", 22, "female")

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`
}

console.log(sayHi(kim))

export {}
