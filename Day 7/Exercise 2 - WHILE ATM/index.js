let totalBalance = 500;
let quantity = 0;
let otherOperation = 1;

let name = (prompt('Welcome, what is your name?'))
let id = (prompt('What is your ID?'))

do {
    quantity = prompt('Type a value')
    let operation = (prompt('Deposit or withdraw?'))
        if (operation === 'deposit'){
            totalBalance = parseInt(quantity) + parseInt(totalBalance)
        }   
            else if (operation === 'withdraw' && quantity < totalBalance)
                totalBalance = parseInt(totalBalance) - parseInt(quantity)

                else (console.log('This value its greater than your balance'))

    otherOperation = prompt('Type 1 to continue or 0 to finish')
} while (otherOperation > 0)

    console.log ('Current balance: ' + totalBalance)
