//function that takes in user age and prints out a string and users aprox age
function age(birth) {
    // birth is the "argument" passed into the function, user input for this case
    let yearBorn = 2021 - `${birth}`
        // yearBorn is the variable that will take in "birth" and subtract it from 2021"
    return 'You are ' + yearBorn + ' years old'
        // we return a string and yearBorn to the user
}