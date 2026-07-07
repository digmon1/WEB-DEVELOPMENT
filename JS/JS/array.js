//array in JS - collection type, dynamic type, dynamic size, hetergenous data
let hastag=["#CR7", "#Portugal", "#Football","#w2026"];
console.log(hastag);
//Length
console.log(hastag.length)
// Index
console.log(hastag[0], hastag[1])

//change Value 
hastag[2]="#w2030"
console.log(hastag);

// Add value
let team =["Germany", "Spain", "Italy","Netherlands"];
// i.push()- add items in array form the last.
team.push("France");
console.log(team);
//ii. unshift()- add items in array from the beginning.
team.unshift("Brazil");
console.log(team);

//Remove Value
//i. pop()
//ii.shift