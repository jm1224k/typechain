const name = "mimi",
  age = 26,
  gender = "female"

interface Human {
  name: string
  age: number
  gender: string
}

const person = {
  name: "mimi",
  gender: "female",
  age: 24
}

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`
}

console.log(sayHi(person))

export {}
