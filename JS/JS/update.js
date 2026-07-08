// Object - collection type, key-value pair 
let contentCreator ={
    name: "Ishowspeed",
    mainChanel:"Youtube",
    mood: "Sad",
    speciality:"Fan of Ronaldo",
};
// Access Value
// i. Dot notation
console.log(contentCreator.name);
// ii. Bracket notation
console.log(contentCreator["mood"])

console.log(contentCreator);
contentCreator.country ="USA";
console.log(contentCreator);
// update item in object
contentCreator.mood= "Very very sad";
console.log(contentCreator);
// delete item in object
delete contentCreator.mainChanel;
console.log(contentCreator);