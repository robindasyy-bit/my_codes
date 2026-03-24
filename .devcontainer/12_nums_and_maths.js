const score = 100
console.log(score);

// manually define datatype
const id = new Number(1234)
console.log(id)

console.log(id.toString()); // converts into srting
//now its string we can apply string properties like -
console.log(id.toString().length);
console.log(id.toFixed(2));

const num = 234.8831
console.log(num.toPrecision(3)); //give value to string = 235
console.log(num.toPrecision(4)); //gives = 234.9

const num1 = 1000000000
console.log(num1.toLocaleString());
console.log(num1.toLocaleString('en-IN')); 

//---------------------MATHS--------------------------------//
console.log(Math);
console.log(Math.abs(-3)); // convert to positive
console.log(Math.round(234.642)); // give round off value
console.log(Math.ceil(4.1)); // round off to upper no.
console.log(Math.floor(4.9)); // round off to same no. or lower
console.log(Math.min(4,7,5,0));
console.log(Math.max(4,7,5,0));

console.log(Math.random()); // return random values btw 0 to 1
console.log((Math.random()*10)+1); // to get no btw 0 to 10,we add +1 to get 1 to 10
//eg- 0.453 *10 = 4.5 
console.log(Math.floor(Math.random()*10)+1); // gives no. without decimal

const min = 10
const max = 20
//console.log(Math.floor((Math.random()*10) + min));          
console.log(Math.floor((Math.random() * (max - min +1)) + min));  // repace *10 by (max - min +1)        

