/*console.log("Hello");

let a = 10;
a = 11;
const b = 20;

console.log("a is: " + a + " and b is: " + b);

//check condition
if (a > b) {
  // curly bracket is called scope
  console.log("a is greater than b");
} else {
  console.log("b is greater than a");
}
const n = 10;
for (let i = 0; i < n; i++) {
  console.log(i);
}

try{
    throw new Error("can't divide with zero");
}catch(err){
    console.log(err);
}

function print(x){
    console.log(x)
}
print(5);
print("hello");
*/

//npm init
//npm i cowsay

const cowsay = require("cowsay");
var oneLinerJoke = require("one-liner-joke");
var getRandomJoke = oneLinerJoke.getRandomJoke();

console.log(
  cowsay.say({
    text: getRandomJoke.body,
    e: "oo",
    T: "U",
  })
);
