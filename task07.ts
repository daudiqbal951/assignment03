//Write a program using functions that takes temperature and check it
//If it is cold then suggest the user to wear warm clothes and so on according to the weather

function advice(temperature:number){
    if(temperature <=0){
        console.log("It's extremely cold. Please wear heavy winter clothing, gloves, scarf, and a warm hat")
    }
    else if(temperature <=10){
        console.log("It's cold outside. You should wear a warm coat, sweater, and maybe a hat")
    }
    else if(temperature <=20){
        console.log("It's a bit chilly. Consider wearing a light jacket or a sweater")
    }
    else if(temperature <=30){
        console.log("The weather is mild. A t-shirt and jeans should be comfortable")
    }
    else {
    console.log("It's warm outside. You can wear shorts, a t-shirt, and sunglasses")
    }
}
advice (-10)
advice (5)
advice (15)
advice (25)
advice (35)