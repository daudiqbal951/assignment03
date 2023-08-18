//Write a program using functions that converts given number of days in to weeks and days
//such as 17 days = 2 weeks and 3 days

function weeksDays(totalDays:number){
    var days:number = totalDays%7
    var weeks:number = Math.floor(totalDays/7)
    
    console.log(`The required answer is ${weeks} weeks and ${days} days`)
}

weeksDays(17)