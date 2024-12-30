let operator = (prompt('Choose one math operator: (+ - * /)'))
let number1 = Number(prompt('Type the first number:'))
let number2 = Number(prompt('Type the second number:'))

switch (operator){
    case '+':
        console.log('The result is: ' + (number1 + number2))
        break;
    case '-':
        console.log('The result is: ' + (number1 - number2))
        break;
    case '*':
        console.log('The result is: ' + (number1 * number2))
        break;
    case '/':
        console.log('The result is: ' + (number1 / number2))
        break;
}