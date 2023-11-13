/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Raquel Herrera-Bernardino
   Date: 2023
*/

// Chat GBT Help
document.addEventListener('DOMContentLoaded', function () {
    // Initial background color
    let currentColor = '#eee';

    // Get the button and add a click event listener
    const button = document.getElementById('changeColorButton');
    button.addEventListener('click', function () {
        // Generate a random color
        const newColor = getRandomColor();

        // Update the background color
        document.body.style.backgroundColor = newColor;

        // Update the current color for future reference
        currentColor = newColor;
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
$(document).ready(function () {
    $("#changeColorButton").click(function () {
        // Toggle the class for the first section
        $("p").toggleClass("main");
    });

    $("#makeSpecialButton").click(function () {
        // Toggle the class for the second section
        $(".special-section p").toggleClass("special");
    });

    $("#fontButton3").click(function () {
        // Add a vanished effect for the "click again!!" button
        $(this).fadeOut(500, function () {
            // Callback function after the button is hidden
            // You can add additional actions here if needed
            // For example, you can use fadeIn() to make the button reappear
            $(this).fadeIn();
        });
    });
});

