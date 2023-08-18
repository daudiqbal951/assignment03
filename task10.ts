//Develop a program using functions that determines the day of the week
//Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name

function weekDay(dayNumber:number){
    if(dayNumber>=1 && dayNumber<=7){
        if(dayNumber==1){
            console.log("Monday")
        }
        else if(dayNumber==2){
            console.log("Tuesday")
        }
        else if(dayNumber==3){
            console.log("Wednesday")
        }
        else if(dayNumber==4){
            console.log("Thursday")
        }
        else if(dayNumber==5){
            console.log("Friday")
        }
        else if(dayNumber==6){
            console.log("Saturday")
        }
        else{
            console.log("Sunday")
        }
        }
        else{
            console.log("Invalid Input")
        }
}
weekDay(1)
weekDay(2)
weekDay(3)
weekDay(4)
weekDay(5)
weekDay(6)
weekDay(7)
weekDay(8)