const name = "mimi",
  age = 26,
  gender = "female"

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}!`
}

console.log(sayHi("mimi", 26, "female"))

export {}
