function greet(salutation, message) {
    console.log(salutation + this.name + ', ' + message)
}

var person = {
    name: 'Magesh'
}

// invoke the greet() function in such a way that it prints 'Mr.Magesh, Have a nice day!'
// person['greet'] = greet;
// person.greet('Mr.', 'Have a nice day!')

greet.call(person, 'Mr.', 'Have a nice day!') // 'call' with 'comma seperated list of arguments'
//output: Mr.Magesh, Have a nice day!

greet.apply(person, ['Mr.', 'Have a nice day!']) // 'apply' with 'array of argument values
//output: Mr.Magesh, Have a nice day!