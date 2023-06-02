//Parameters.

//const cashwithdrawal = (amount,accAmount)=>{
    //console.log(`withdrawing ${amount} from acount,new balance is ${accAmount - amount}`)
//}
//Arguments

//cashwithdrawal(400,4000);

/*const favColor = (colour) => {
    console.log(`My favourite colour is ${colour}`);
}
favColor("Red");
*/

//Activity 1

/*function factorial (n) {
    if ((n === 0) || (n === 1)) {
        return 1 ;
}   else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));*/

//const factorial = n => (n === 0 || n === 1) ? 1 : n * factorial(n - 1);
//console.log(factorial(33));

//Activity 2


/*let orderCount = 0;
const takeOrder = (topping, crustType) => {
    console.log(`Pizza with ${topping} and ${crustType} crust`);
    orderCount++;
}
takeOrder("pineapple", "thin");
*/

//Activity 3

let balance = 950;
let pin = 7983;

function withdraw(amount, enteredPin) {
  if (enteredPin === pin && amount <= balance) {
    balance -= amount;
    console.log(`withdrawn ${amount}. new balance is ${balance}.`);
  } else if (enteredPin !== pin) {
    console.log('Incorrect PIN.');
  } else {
    console.log('Insufficient funds.');
  }
}

withdraw(230, 7983); 
withdraw(1000, 7983); 
withdraw(500, 6666);
