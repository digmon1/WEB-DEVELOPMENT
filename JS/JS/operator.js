// operator
/*

1. Airthmetic
2. Relational
3. Logical
4. Assignment
5. Comparasion
6. Ternary
7. Typeof
8. Bitwise
*/

//1. Airthemetic Operator
//(+, -, *, /, %, **, ++, --)
// a. increment ++
let number =7;
console.log(number);
console.log(++number);// pre increment
let age=10;
console.log(age++); // post increment
console.log(age);
// b. Decrement --

number =7;
console.log(number);
console.log(--number);// pre decrement
age=10;
console.log(age--); // post decrement
console.log(age);

// 2. Relational Operator
// (>, >, >=, <=, ==, ===, !=, !==)

// == vs ===
let point =5;
let num1 ="5";
console.log(point==num1)
console.log(point===num1)// strict comparasion - compare value along with data type

// != vs !==
console.log(5 !="5");
console.log(5 !=="5");

// Logical Operator
// AND(&&)
//b. OR(||)
// c. NOT (!)

// Voting eligible check - (age, citizenship)

let Age= 16
let hascitizenship = true;
let isEligible= Age>=18 && hascitizenship;
console.log("voting eligible:", isEligible);


// Assignment operator (=)
// (+=, -=, *=, /=)

let salary1=60000
salary1 = salary1+ 5000;
console.log("salary1", salary1)


//Ternary
// Syntax
// condition ? trueCas : FalseCase
//Germany chances to win worldcup

let wingames =false;
let chances = wingames? "lift trophy": "Loose world cup";
console.log(chances);

// Bitwise -(Bitwise AND (&), Bitwise or (|), Bitwise X-OR (^), Left Shift (<<), Right Shift(>>))

let bitFirst =10;
let bitSecond =11;
console.log("Bitwise And", bitFirst&bitSecond);
console.log("Bitwise OR", bitFirst|bitSecond);
console.log("Bitwise X-OR", bitFirst^bitSecond);
console.log("Bitwise Left Shift", bitFirst<<bitSecond);
console.log("Bitwise Right Shift", bitFirst>>bitSecond);

console.log(5, 5<<1, 5<<2);
console.log(15, 15>>1, 15>>2);

//Bitwise NOT (~)
//~n =-(n+1)
let luckynumber =3;
console.log(~luckynumber);
let bitwisenot = luckynumber+(~luckynumber)+1;