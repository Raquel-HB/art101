/*
* Author: Raquel Herrera-Bernardino
* Created Nov 6, 2023
*index.js-Lab 8: Functions & Callbacks
*/

var numArray = [4, 6, 10, 30, 40, 80, 20]
console.log("My array", numArray);



function subtract (x) {
var results = x - 10
return results;
}
console.log("subtracting 10 to the array:", numArray );





var addingResults = numArray.map( function (x) {
var results = x + 60
return results
}) 
console.log("adding to the array by 60:", addingResults)
