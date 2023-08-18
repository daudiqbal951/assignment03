//Write a program using functions that calculates the percentage

function percentage(obtainedMarks:number,totalMarks:number){
    var percentage:number = (obtainedMarks/totalMarks)*100
    console.log(`The percenatge is ${percentage}%`)
}

percentage(680,1100)