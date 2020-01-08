class Person {
  //Creating an instance of Person will execute the constructor function.
  constructor(name='Anonymous', age = 0) {
    //console.log('test')
    this.name = name
    this.age = age
  }
  getGreeting() {
    //return 'Hi I am ' + this.name + '!'
    return `Hi. I am ${this.name}!`
  }
  getDescription(){
    return `${this.name} is ${this.age} years old!`
  }
}

class Student extends Person {
  constructor(name, age, major){
    //call the parent constructor function
    super(name,age) //when a new instance is created super calls the constructor function of the parent class.
    this.major = major
  }
  hasMajor() {
    //logical not operator
    return !!this.major
  }
  getDescription() {
    //return 'testing'
    let description = super.getDescription()
    if(this.hasMajor()){
      description += ` Their major is ${this.major}`
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, age, getLocation){
    super(name, age)
    this.getLocation = getLocation
  }
  hasLocation(){
    return !!this.getLocation
  }
  getGreeting(){
    let greeting = super.getGreeting()
    if(this.getLocation) {
      greeting += ` I'm visiting from ${this.getLocation}`
    }
    return greeting
  }
}

// const me = new Student('Adoniram Vargas',47, 'Biology')
// console.log(me.getDescription())

const traveler = new Traveler('Adoniram Vargas', 47, 'Miami')
console.log(traveler.getGreeting())

// const other = new Student()
// console.log(other.getDescription())