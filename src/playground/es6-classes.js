class Person {
  //Creating an instance of Person will execute the constructor function.
  constructor(name='Anonymous', age = 0) {
    //console.log('test')
    this.name = name
    this.age = age
  }
  getGretting() {
    //return 'Hi I am ' + this.name + '!'
    return `Hi. I am ${this.name}!`
  }
  getDescription(){
    return `${this.name} is ${this.age} years old!`
  }
}

const me = new Person('Adoniram Vargas',47)

console.log(me.getGretting())
console.log(me.getDescription())

const other = new Person()

console.log(other.getGretting())
console.log(other.getDescription())