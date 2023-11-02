/** 
 * Author: Raquel Herrera-Bernardino
 * Created: Oct 31,2023
 */

let person = prompt("Please enter your name", "Name");


function sortUserName() { 
    var userName = window.prompt ("Hello! May I have your name please :) ");
    console.log("userName =", userName); 
    var nameArray = userName.split( ""); 
    console.log("nameArray=", nameArraySort); 
    var nameArraySort = nameArray.sort();
    console.log("nameArraySport =", nameArraySort);

    var nameSorted = nameArraySort.join ("");
    console.log("nameSorted=", nameSorted); 

    return nameSorted; 

} 

document.writeln (" Nice, Displaying name here :D: ",
      sourtUserName(), "</br>"); 