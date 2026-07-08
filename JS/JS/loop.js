//  looping statement
/*
1. for loop
2. do while loop
3. while loop
4. for of loop
5. for in loop
*/

// for loop
// syntax
/*
for (initilization, condition, increment/decrement){
code
}
*/

for (let i = 1 ; i<=10; i++){
    console.log(i);
}

// while loop
// Syntax
/*
while (condition){
    code:
    increment/ decrement
}
*/
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

// do while loop
/* 
do {
    code:
    incerement/decrement;
}while (condition);
*/
// Display number between 20 -50
console.log("Do while")
let number1= 20;
do{
    console.log(number1);
    number1++;

}while (number1>=20 && number1<=50);

// for of loop used in array, easier to travel in array
// syntax:
/*
for (let item of arr){
    // code
}
*/
let teams =['Morocco','Belgium','Norway', 'France','Argentina']
console.log(" for of loop");
for (let team in teams){
    console.log(teams[team]);
}

// for in loop - used for object
let player ={
    name:'LM10',
    country: "Arg",
    WCcup:1
};
console.log('for in loop');
for (let key in player){
    console.log(key, player[key]);
}
