// approach - 1
var person = {
    name: 'Magesh',
    whoAmI: function () {
        console.log('I am ', this.name)
    }
}
person.whoAmI()
//output: I am  Magesh


//approach - 2
var person = {
    name: 'Magesh'
}

function whoAmI() {
    console.log('I am ', this.name)
}

//make the function a method of person
person['whoAmI'] = whoAmI
person.whoAmI()
//output: I am  Magesh

//another object
var product = {
    name: 'Pen'
}
//make the function a method of product
product['whoAmI'] = whoAmI

product.whoAmI()
//output: I am  Pen

person.whoAmI()
//output: I am  Magesh

//verifying if all the references point to the same function
whoAmI['createdAt'] = new Date()
console.log(whoAmI.createdAt)
console.log(person.whoAmI.createdAt)
console.log(product.whoAmI.createdAt)