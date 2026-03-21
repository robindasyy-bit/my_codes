// Premitive
// 7 types : String , Number , Booleaner , Null , indefined , Symbol , BigInt
// JS is Dynamic
const score = 100
const scorevalue = 100.3
const login = false
const temp = null
let UserAge; // let UserAge = undefined

const Id = Symbol('123');
const AnotherId = Symbol('123'); // it may contain same values but they are not same
console.log(Id === AnotherId);  // false

const BigNumber = 6437698479827397982n  // example of BigInt

// Refreance type (Non-Premitive)
// Array , Objects , Functions
const heros = ["spidy", "ironman", "dr.straing"]

let myObj={
    name: "robin",
    age: 18,
}

const myFunction = function(){
    console.log("Hello World")
}

//------------------------------------------------//

console.log(typeof myFunction) // function or objectfunction
console.log(typeof null) // object
