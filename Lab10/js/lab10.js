/*
lab.js - This simple JavaSCript/JQuery script appends new elements to an output div 
Author: Raquel Herrera-Bernardino
Created: 11.16.2023
*/ 

function generateRandomText() {
    const text = "j rb rk jrb  brljsbbkflnb dlbksb mbjbf f jbf kd blr blm fjfjfj fkjbjkfnb kskb rkkkn vbkj fbj dvkw eb b jkdfb kjr  ks mckd vkr bnkb rfbjl jlrb lkf blmd  blfbkrnb lf/ bsjrfb jkrbjfs  !! ";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random()*(max - min+1)) + min;
    // Get a random starting index to slice the Lorem Ipsum Text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    //Generate the random Lorem Ipsum-like text 
    return text.slice(randStart, randStart + randLen);
}
// click listener for button
$("#make-convo").click(function(){ 
    // get new fake dialogue
const newText = generateRandomText();

// append a new div to our output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');

});

