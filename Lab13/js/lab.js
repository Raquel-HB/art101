/*
   lab.js -  Lab 13

   Author: Raquel Herrera-Bernardino
   Date: Nov 26, 2023
*/

maxFactors = 4;

outputEl = document.getElementById("output");

// few checks here
function getFactorObj() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue)

        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}
// some of part I got mixed on
function outputToPage(str) {
    var newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}

function fizzBuzzBoom(maxNums, factorObj) {
  
    for (var num=0; num<maxNums; num++) {
        debugger;
   
        var outputStr = "";
        // 
        for (var factor in factorObj) {
        
            if (num % factor == 0) {
                // 
                outputStr += factorObj[factor];
            }
        }
        //  " - FizzBuzz!"
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max)
    if (! max) {
        reportError("You must provide a maximum");
        return;
    }
    // had to check wes page because I was lost on why the outcome didn't appear

    var factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("You must provide at least one factor and text");
        return;
    }
  
    outputEl.innerHTML = "";
    fizzBuzzBoom(max, factorObj);
    outputEl.classList.add("cols");
})