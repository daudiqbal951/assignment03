//Write a program using functions to convert the temperature from Faranheit to Celcius

function tempConFtoC(tempF:number){
    var tempC:number = (5/9)*(tempF-32)
    console.log(`The temperature in Celcius is ${tempC}`)
}
tempConFtoC(86)