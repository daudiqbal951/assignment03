"use strict";
//Create a program using functionsthat determines the category of a user-provided age
//If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager."
//Otherwise, print "Adult."
function category(age) {
    if (age >= 0 && age <= 12) {
        console.log("Child");
    }
    else if (age >= 13 && age <= 19) {
        console.log("Teenager");
    }
    else {
        console.log("Adult");
    }
}
category(10);
category(15);
category(25);
