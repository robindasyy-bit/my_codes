// 2 types of memories
// Stack (Primitive ) = Copy, Heap (Non-Primitive) = Refrence of original value

//STACK ------------------
let myName = "robin";
let anothername = myName;
anothername = "shroud"

console.log(anothername);
console.log(myName);



// HEAP ------------------
let userone = {
    name: "robin_das",
    age: 19,
}


let usertwo = {
    name: "manju",
    age: 20
}

usertwo = userone
userone.age = 2


// console.log(userone)
// console.log(usertwo)
console.log(usertwo.age);

