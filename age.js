// these functions are absolute trash and are just here to document growth and for reference


//function that takes in user age and prints out a string and users aprox age
function age(birth) {
    // birth is the "argument" passed into the function, user input for this case
    let yearBorn = 2021 - `${birth}`
        // yearBorn is the variable that will take in "birth" and subtract it from 2021"
    return 'You are ' + yearBorn + ' years old'
        // we return a string and yearBorn to the user
}

// function that aprox a commision from a ref in Real estate
function refCom(price) {
    let buyer = `${price}` * .03
    let referral = buyer * .25
    let afterRef = buyer - referral
    let myCut = afterRef / 2
    return 'After all deductions your compensation will be ' + myCut
}