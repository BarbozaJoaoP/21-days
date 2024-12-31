//Showing the multiplication table of the chosen number and the next 2 numbers

let userChoice = parseInt(prompt ('Choose a number:'))

for (let i = userChoice; i<=userChoice+2; i++){
    console.log('Number: '+i)
    for (let j=0; j<10; j++){
        console.log(i+'x'+j+' = '+(i*j))
}
}