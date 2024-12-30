let gasPrice = Number(5)
let alcoholPrice = Number(3)
let service = prompt('You want fuel or calibrate your tires?')

switch (service){
    case 'calibrate':
        console.log('Tires sucefull calibrated')
        break;
    case 'fuel':
        let fuelChoice = (prompt('You want gasoline or alcohol?'))
        let fuelQuantity = Number(prompt('How much liters?'))
        if (fuelChoice === 'gasoline'){
            console.log(fuelQuantity + ' liters of gasoline fueld, this cost: $'+(fuelQuantity * gasPrice))
        } else if (fuelChoice === 'alcohol'){
            console.log(fuelQuantity + ' liters of alcohol fueld, this cost: $'+(fuelQuantity * alcoholPrice))
        }
        break;
    default: console.log("I don't understand, can you type again?")
}