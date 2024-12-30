let hungry = prompt('Are you hungry?')
let money = prompt('You have money?')
let restaurant = prompt('The restaurant are open?')

if (hungry === 'no' || money === 'no'){
    console.log('Today, dinner is at home')
}else if (hungry === 'yes' && money === 'yes' && restaurant === 'yes'){
    console.log('Today, dinner is at the best restaurant')
}else{
    console.log('Take a delivery')
}