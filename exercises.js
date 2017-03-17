// 1. In your own words, explain how object literals are used to store related information and why that is useful.
'Answer: Object literals are used to store data with property/value pairs. That is useful because you can have a lot of data in one place and it acts as one thing when you are using it.'

// 2. Write a short program in which you create two objects whose properties describe fictional characters. Output both objects to the console.
var character1 = {
  name: 'Wally',
  movie: 'Wally',
  type: 'Robot'
}

var character2 = {
  name: 'Nemo',
  movie: 'Finding Nemo',
  type: 'Fish'
}

console.log(character1)
console.log(character2)

// 3. Write a small program that does the following:
// Create an object using object literal syntax with at least five properties. For example, your object might represent a person and include properties for name, age, number of children, etc.
var person = {
  fname: 'Ashleigh',
  lname: 'Arnaud',
  age: 25,
  sex: 'female',
  'number of kids': 0
}

// Output the object directly to the console.
console.log(person)

// Write a string that describes the object using the properties you created. For example, "Dan is a 35 year old father of 2 kids." Be sure to access the properties using the dot property accessor.
console.log(person.fname + ' ' + person.lname + ' is a ' + person.age + ' year old ' + person.sex + ' with ' + person['number of kids'] + ' kids.')

// Change the value of one of the properties using dot notation.
person.age = person.age + 1
// Add a new property to the object using dot notation.
person.favFood = 'ice cream'
// Output the object directly to the console.
console.log(person)
// Write a new string that describes the object using all of the object's properties. Be sure to include the property you just created.
console.log(person.fname + ' ' + person.lname + ' is a ' + person.age + ' year old ' + person.sex + ' with ' + person['number of kids'] + ' kids' + ' who loves ' + person.favFood + '.')
