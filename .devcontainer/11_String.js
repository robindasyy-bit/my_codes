const word = "Hello" + " World"
const word1 = " Shroud"
console.log(word + word1);

// another way

console.log(`Hello my name is ${"Robin"} and my friends call me${word1}`);

const gamename = new String('Shroud');
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase()); // original string is not change (copy)
console.log(gamename.charAt(3));
console.log(gamename.indexOf('o'));

const game = gamename.substring(0,4); // negative value doen't count only in slice
console.log(game);

const game1 = gamename.slice(-5 , 3); // hr  (-5 = duorh , 3 = shr) = hr
console.log(game1);

const wd = "    robin    "
console.log(wd);
console.log(wd.trim());

const url = "https://robin.com/robin%29urnl"
console.log(url.replace('%29' , "_"));

console.log(url.split("/"));



