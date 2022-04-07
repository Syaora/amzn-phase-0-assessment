// 1. Write your functions here
function line(currentLine){
    if (currentLine.length > 0){
        let message = `The line is currently:`
        currentLine.forEach((name, index) => message += ` ${index + 1}. ${name}`)
        //console.log(message)
        return message
    } else return `The line is currently empty.`
}

function takeANumber(currentLine, name){
    currentLine.push(name)
    console.log(`Welcome, ${name}. You are number ${currentLine.length} in line.`)
}

function nowServing(currentLine){
    if (currentLine.length > 0){
        console.log(`Currently serving ${currentLine[0]}.`)
        currentLine.shift()
    } else console.log(`There is nobody waiting to be served!`)
}

// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"