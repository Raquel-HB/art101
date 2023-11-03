/** 
 * Author: Raquel Herrera-Bernardino
 * Created: Oct 31,2023
 */

function sourceUserName() { 
    var userName = window.prompt ("Hello! May I have your name please ");
    console.log("userName =", userName); 
    var nameArray = userName.split(""); 
    console.log("nameArray=", nameArraySort); 
    var nameArraySort = nameArray.sort();
    console.log("nameArraySport =", nameArraySort);

    var nameSorted = nameArraySort.join ("");
    console.log("nameSorted=", nameSorted); 

    return nameSorted; 

} 
document.writeln ("It's nice meeting you! ")
document.writeln (" Displaying name here: ",
      sourceUserName(), "</br>"); 