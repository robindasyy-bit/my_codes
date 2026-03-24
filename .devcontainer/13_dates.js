let myDate = new Date
console.log(typeof myDate); // object

console.log(myDate.toString()); 
console.log(myDate.toJSON()); 
console.log(myDate.toLocaleDateString()); 
console.log(myDate.toISOString()); 
console.log(myDate.toLocaleTimeString()); 
console.log(myDate.toTimeString()); 

let date = new Date(2027,0,23)  // in js month starts with 0
console.log(date.toDateString());  // it return the given date above

let date1 = new Date(2027,0,23,6,3)
console.log(date1.toLocaleString()); // return time too

// we can change the formate of date
let date2 = new Date("03-29-2025")
console.log(date2.toLocaleString());

