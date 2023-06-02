//Activity 1

/*let age = 39;
let country = "UK";

if (age > 17 && country === "UK") {
  console.log("Yes I can serve you");
} else {
  console.log("You aren't old enough");
}
*/

//Activity 2

/*let topping = "pineapple";

switch (topping) {
  case "mushrooms":
  case "olives":
  case "onions":
    console.log("These are important ingredients for my pizza.");
    break;
  case "pepperoni":
    console.log(`I don't mind having ${topping} on my pizza.`);
    break;
  default:
    console.log(`${topping} should not be on a pizza.`);
}
*/

//Activity 3

/*let password = "password123";
if (password.length < 8) {
  console.log("The password is too short.");
} else {
  console.log(password);
}

//Strech
let num = 35;
if (num % 3 === 0 || num % 5 === 0) {
  console.log("This number is divisible by 3 or 5.");
} else {
  console.log("This number is not divisible by 3 or 5.");
}
*/

//Activity 4

/*let num = 15;
if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizz buzz");
} else if (num % 3 === 0) {
    console.log("fizz");
} else if (num % 5 === 0) {
    console.log("buzz");
} else {
    console.log(num);
}
*/

//Activity 5

/*let num = 12321;
let temp = num;
let reversedNum = 0;

while (temp > 0) {
  const remainder = temp % 10;
  reversedNum = reversedNum * 10 + remainder;
  temp = Math.floor(temp / 10);
}

if (reversedNum === num) {
  console.log("The number is a palindrome.");
} else {
  console.log("The number is not a palindrome.");
}
*/

//Activity 6

/*let time = 9;
let placeOfWork = "McDonalds";
let townOfHome = "Chester";

if (time < 7) {
  console.log("I'm sleeping");
} else if (time < 8) {
  console.log("I'm getting ready for work");
} else if (time < 9) {
  console.log("I'm commuting to work");
} else if (time < 17) {
  console.log(`I'm at ${placeOfWork}`);
} else if (time < 18) {
  console.log("I'm commuting back home");
} else if (time < 24) {
  console.log(`I'm at my home in ${townOfHome}`);
} else {
  console.log("Invalid time");
}
*/

//Activity 7

/*let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let index = -1;
for (let i = str.length - 1; i >= 0; i--) {
  if (vowels.includes(str[i])) {
    index = i;
    break;
  }
}
console.log(index);
*/

//Activity 8

/*let word = "racecar";
if (word.charAt(0) === word.charAt(word.length - 1)) {
  console.log(true);
} else {
  console.log(false);
}5
*/

//Activity 9

let num1 = 2;
let num2 = 3;

if ((num1 + num2) % 2 === 0) {
    console.log(num1 + num2);
} else {
    console.log(num1 * num2);
}