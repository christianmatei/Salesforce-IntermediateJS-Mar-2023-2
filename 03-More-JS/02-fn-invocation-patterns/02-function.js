var person = {
    name: 'Magesh'
}

function whoAmI() {
    console.log('I am ', this.name)
}

person['whoAmI'] = whoAmI
person.whoAmI() //invoking the function as a method of 'person'
//output: I am  Magesh

whoAmI() //invoking as a normal function (this => window, window.name is '' by default)
//output: I am

window.name
// ''
window.name = 'Chrome Browser' //set the window.name for verification
// 'Chrome Browser'

whoAmI()
//output: I am  Chrome Browser

person.whoAmI()
//output: I am  Magesh