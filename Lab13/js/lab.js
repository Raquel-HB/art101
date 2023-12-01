/*
   lab.js -  Lab 13

   Author: Raquel Herrera-Bernardino
   Date: Nov 26, 2023
*/

var maxFactors = 4;

var outputEl = document.getElementById("output");

// few checks here
function getFactorObj() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        var numId = "num" + factor;
         var textId = "text" + factor;
        var numValue = document.getElementById(numId).value;
        var textValue = document.getElementById(textId).value;
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

function fizzBuzzBoom(maxNum, factorObj) {
    for (var num = 0; num<maxNum; num++) {
        var outputStr = "";
        for (var factor in factorObj) {
            if (num % parseInt(factor) === 0) {
                outputStr += factorObj[factor];
            }
        }
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
}

document.getElementById("submit").addEventListener("click", function() {
    var maxNum = document.getElementById("max").value;
    var factorObj = getFactorObj();
    fizzBuzzBoom(maxNum, factorObj);
});