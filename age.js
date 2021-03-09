// these functions are absolute trash and are just here to document growth and for reference
// I came up with all each function


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


// if/else functions
function basicTeenager(age) {
    if (age <= 19 && age >= 13) {
        return 'You are a teenager'
    } else {
        return 'You are not a teenager'
    }
}
//tenary function
function ternaryTeenager(age) {
    return age <= 19 && age >= 13 ?
        "You are a teenager" :
        "You are not a teenager"
}

// if/elseif/else function
function ageChecker(age) {
    if (age <= 19 && age >= 13) {
        return 'You are a teenager!'
    } else if (age <= 12) {
        return "You are a kid"
    } else {
        return "You are a grownup"
    }
}

// switch function
function switchAge(age) {
    switch (age) {
        case 13:
            return "You are a teenager"
            break;
        case 14:
            return "You are a teenager"
            break;
        case 15:
            return "You are a teenager"
            break;
        case 16:
            return "You are a teenager"
            break;
        case 17:
            return "You are a teenager"
            break;
        case 18:
            return "You are a teenager"
            break;
        case 19:
            return "You are a teenager"
            break;
        default:
            return "You have an age"
    }
}