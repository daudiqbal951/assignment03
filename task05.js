"use strict";
//Write a program using functions that calculates the discount for a product based on its price.
//If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount
function discount(price) {
    if (price > 100) {
        var discount = 0.1 * price;
    }
    else {
        var discount = 0.05 * price;
    }
    console.log(`The discount is $${discount}`);
}
discount(150);
discount(50);
