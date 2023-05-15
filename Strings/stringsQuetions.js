// convert str to array

const str = "Hello this is a string , How are you to day";

console.log([...str]);
console.log([str]);
console.log(str.split());
console.log(str.split(""));
console.log(str.split(" "));

// replace character

console.log(str.replace("H", "1"));
console.log(str.replace(/H/g, "1"));

// get substring

console.log(str.substring(5, 15));

// pop 1st char

console.log(str.substring(1, str.length));

// pop last char

console.log(str.substring(0, str.length - 1));

// specific char

let temp = str.split("o");

console.log(temp[0]);

// Reverse

const word = "this is a sting to split";

console.log(word.split("").reverse().join(""));

const reverse = word.split("").reverse().join("");

console.log();

// selection

const str2 = "       hellO      ";

console.log(str2.trim());

// Substring

let sub = "st";

console.log(word.includes(sub));

console.log(word.indexOf(sub));

// backspace

let str3 = 'syed"';

console.log(str3.toUpperCase().length); //escape sequence

// change upper to lower case

console.log(str.toUpperCase());

// slice

let str4 = "give money please rs 2000";

let amount = str4.slice("give money please rs ".length);

amount2 = Number.parseInt(str4.slice(21));

console.log(amount);

console.log(amount2);

console.log(typeof amount2);
