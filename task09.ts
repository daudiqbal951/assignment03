//Write a program using functions that checks if the given year is leap year or not.

function leapYear(year:number){
    if(year%4==0){
        console.log("The year is a leap year")
    }
    else {
        console.log("The year is not a leap year")
    }
}
leapYear(2020)
leapYear(2021)