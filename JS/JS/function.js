/*
1. Function Declaration
2. Function Expression
3. Arrow function
*/
// Function Declaration - reusable block of code hoisted function

/* Syntax functionName(){
    code:
}*/

console.log("Function Declaration");
function greet(){
    console.log("Hello World!")
}
greet();

// Function with argument and paramenter
// JS code to display name
console.log("Function with argument and parameter");
function display(name){
    console.log(`name: ${name}`);

}
display("Sanjay Kumar Shrestha");
display("Nishant Shrestha");
// Function with return type
console.log("Return Type Function")

// Function to return sum of two digit
let first =10;
let second =20;
function sum(x, y){
    return x+y;
}
let result = sum(first, second)
console.log("sum:", result);

// Function Hoisting - function is called before the declaration (only workd in function declaration)

// Function to display " welcome to the lbef family " using function hoisting

console.log("function Hoisting")
welcome();
function welcome(){
    console.log("Welcome to the LBEF Family")
}
// Function Expression id not necessary during function definition
console.log("Function Expression")
let func = function(){
    console.log("This is function expression")
};
func();

// Function to calculate substraction of two number using function expression
let sub =function(){
    console.log(`The value after subtraction is:  ${222-44}`)
};
sub();

// Arrow function in arrow function, no need to write function keyword, function name. and return KEYWORD does not support hoisting
//  syntax:()=> code;
console.log("Arrow Function");
let name= (namePara) => `Name: ${namePara}`;
console.log(name("Daya Darwaza Tod!!!!!!!!!!"))

// Arrow function,
// Area of rectangle
// Volume of cuboid
// simple interest
// display "Odessy - Directed by Christopher Nolan"

//Area of rectangle
let areaRectangle = (length, breadth) => length * breadth;
console.log("Area of Rectangle:", areaRectangle(10, 5));

//Volume of cuboid
let volumeCuboid = (length, breadth, height) => length * breadth * height;
console.log("Volume of Cuboid:", volumeCuboid(10, 5, 3));

//Simple Interest
let simpleInterest = (principal, rate, time) => (principal * rate * time) / 100;
console.log("Simple Interest:", simpleInterest(1000, 5, 2));

//Display movie info
let movieInfo = () => "Odessy - Directed by Christopher Nolan.";
console.log(movieInfo());