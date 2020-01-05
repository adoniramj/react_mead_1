const add = (a, b) => {
  //console.log(arguments)
  return a + b
}

console.log(add(5, 1, 1000))

const user = {
  name: 'Adoniram',
  cities: ['Miami', 'London', 'Tokyo'],
  printPlacesLive: function () {
    //the anonymous function below does not have access to 'this.name'
    this.cities.forEach(function (city) { //this anonymous function is not 'connected' to printPlacesLive property
      //uncomment line below => will produce error
      //console.log(this.name + 'has lived in ' + city)
    })
  },
  printPlacesLive2: function () { //this function bind to the user object
    this.cities.forEach(city => {
      //In this case this.name looks to its parent
      console.log(this.name + ' has lived in ' + city)
    })
  },
  printPlacesLive3: () => { //this arrow function does not bind to the user object
    // this.cities.forEach(city => {
    //   console.log(this.name + ' has lived in ' + city)
    // })
  },
  //ES6 new method definition syntax
  printPlacesLive4() {
    this.cities.forEach(city => {
      //In this case this.name looks to its parent
      console.log(this.name + ' has lived in ' + city)
    })
  },
  printPlacesLiveMap(){
    return this.cities.map(city => this.name + ' has lived in ' + city)
  }
}

user.printPlacesLive()
user.printPlacesLive2()
user.printPlacesLive3()
user.printPlacesLive4()
console.log(user.printPlacesLiveMap())

const multiplier = {
  numbers: [1,2,3,4],
  multiplier: 2,
  multiply(){
    return this.numbers.map(number => number*this.multiplier)
  }
}

console.log(multiplier.multiply())