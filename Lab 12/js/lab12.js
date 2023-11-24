/*
   lab.js -  Lab 12

   Author: Raquel Herrera-Bernardino
   Date: Nov 21, 2023
*/

// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff 
// depending on length mod 4 

function sortingHat (str) {
     len = str.length;
     mod = len % 4; 
    if (mod == 0 ) {
        return "GRYFFINDOR!!";
    }
    else if (mod == 1){
        return "RAVENCLAW!!";
    }
    else if (mod == 2){
        return "SLYTHERIN!!";
    }
    else if (mod == 3){
        return "HUFFLEPUFF!!";
    }
} 

var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){

     var name = document.getElementById ("input").value;

     var house = sortingHat(name);

    var  newText = "<p> Hmmm...you're sorted into "+ house + "</p>";
     document.getElementById("output").innerHTML = newText; 



});
