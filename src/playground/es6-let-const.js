let nameLet = 'Andrew'
nameLet = 'Julie'
console.log('nameLet', nameLet)

const nameConst = 'Jane'
//nameConst = 'Gunther'
console.log('nameConst', nameConst)

//block scope
const fullName = 'Adoniram Vargas'
let firstName

if(fullName) {
  firstName = fullName.split(' ')[0]
  let firstName2 = firstName
  console.log(firstName)
}

console.log(firstName)
//console.log(firstName2) this produces an error 
//because of block scope