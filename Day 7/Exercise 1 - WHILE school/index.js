let totalPoints = Number(0);
let studentsQuantity = Number(0);
let menQuantity = Number(0);
let womanMost7 = Number(0);
let menHigherPoints = Number(0);
let repeat = Number(1);

do {
    let genre = prompt('What is the student genre? (male, female)');
    let points = Number(prompt('How much points this student had?'));
    studentsQuantity++;
        if (points > 0)
            totalPoints = totalPoints + points;
        if (genre === 'male')
            menQuantity = menQuantity + 1;
        if (genre === 'male' && points > menHigherPoints)
            menHigherPoints = points;
        else if (genre === 'female' && points > 7)
            womanMost7++;
    repeat = Number(prompt('Type 1 for add other student or 0 if you finished'));
} while (repeat > 0)

    console.log('Students average: ' + parseInt(totalPoints/studentsQuantity))
    console.log(menQuantity + ' mens sent their points')
    console.log(womanMost7 + ' womens had more of 7 points')
    console.log('The higher male points is: ' + menHigherPoints)