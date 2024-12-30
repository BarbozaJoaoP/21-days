let yourName = prompt('What is your name?')
let age = prompt('How old are you?')
let license = prompt('You have driver license?')
let car = prompt('You have car?')

if (age < 18 || license === 'no'){
    console.log(yourName + ", you can't drive.")
} else if (age >= 18 && license === 'yes' && car === 'no'){
    console.log(yourName + ", you can drive but you don't have a car")
} else{
    console.log(yourName + ", you are the driver")
}