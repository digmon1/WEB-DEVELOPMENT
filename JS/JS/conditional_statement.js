// Conditional statement JS
// If statement
// if - else staqtement
// if - else if - else statement
// nested is else statement
// switch case 

// if -else if -else statement
// write a js program to check if a number is positive, negative or zero.
let number=15;
if (number>0){
    console.log("The number is positive.");
}
else if(number<0){
    console.log("The number is negative.");

}
else{
    console.log("Zero")
}
// switch-case
/*Switch(option{
case opt:
    code
    break:
-----
default:
    code
})*/
// writer a menu driven program to stimulate atm operation after login
console.log(`
    1. Fast cash
    2. Cash withdraw
    3. Balance Inquiry
    4. Reset password
`);

let option = 1;

switch (option) {
    case 1:
        console.log("Fast Cash Selected");
        break;

    case 2:
        console.log("Cash Withdraw Selected");
        break;

    case 3:
        console.log("Balance Inquiry Selected");
        break;

    case 4:
        console.log("Reset Password Selected");
        break;

    default:
        console.log("Invalid Choice, Thank you for visiting");
}