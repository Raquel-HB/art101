
// Author: Raquel Herrera-Bernardino
// Date: Oct 27, 2023

// Define Variables 

myTransport = ["legs", "bus", "uber"];

myMainRide = {
        make: "Volkswagen",
        model: "Volkswagen New Beatle", 
        color: "red", 
        year: 2008,
        age: function() {
            return 2022 - this.year;
        }
}

document.writeln ("Getting around:" + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");

