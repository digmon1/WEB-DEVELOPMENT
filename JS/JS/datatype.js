// data type in JS
/* 
    1. Primary Data Type
        a. Number
        b. String
        c. BigInt
        d. Undefined
        e. Null
        f. Boolean
        g. Symbol


    2. Non primary Data Type
        a. Object
        b. Array
        c. Function
*/

// a. Number - both whole number and decimal number
const age=18;
const pi=3.14;
console.log(typeof age, typeof pi);

// b. string - anything enclosed by single qoute '', double qoute "", and bactick ` `,

let secname ='Section A';
let paragraph=`
Today is placement Day in LBEF College. 
All the students are higly recommended to visit during placement hour`

console.log(secname, typeof secname)
console.log(paragraph, typeof paragraph)


// c. BigInt - reresent whole number, big in size hs n at the end of the number.

let mansionPrice = 750000000000000n;
console.log(mansionPrice, typeof mansionPrice)

// d. undefined = no value, just variable is declared
let finalvalue;
console.log(finalvalue, typeof finalvalue)

// e. null - value is assignment with all, for later use
let discount =null;
console.log(discount, typeof discount)


// f. boolean - true/false
let isstudent = true;
let isCOO = false;
console.log(isstudent, typeof isstudent);
console.log(isCOO, typeof isCOO);

// g. Symbol - unique, for objects.
let std_ID = Symbol("1001");
console.log(std_ID, typeof std_ID);
