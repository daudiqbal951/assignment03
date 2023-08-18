"use strict";
//Write a program using functions that checks if the given number is  divisible by 3 or 5
//or both or not divisible by anyone show output accordingly
function check(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("The number is divisible by both 3 and 5");
    }
    else if (number % 3 == 0) {
        console.log("The number is divisible by 3");
    }
    else if (number % 5 == 0) {
        console.log("The number is divisible by 5");
    }
    else {
        console.log("The number is not divisible by 3 and 5");
    }
}
check(15);
check(9);
check(10);
check(11);
