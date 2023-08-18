//Write a program using functions to convert the temperature from Celsius to Fahrenheit

function temp(tempC:number){
    var tempF:number = (1.8*tempC)+32
    console.log(`The temperature in Faranheit is ${tempF}`)
}

temp(30)