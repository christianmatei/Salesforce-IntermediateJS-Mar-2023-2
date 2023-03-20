var person = {
    name: 'Magesh'
}

function whoAmI() {
    console.log('I am ', this.name)
}

//I am Magesh
//person['whoAmI'] = whoAmI
//person.whoAmI()
whoAmI.call(person)


var product = {
    name: 'Pen'
}
whoAmI.call(product)
//output: I am  Pen


// approach-2
var person = {
    name: 'Magesh',
    whoAmI: function () {
        console.log('I am ', this.name)
    }
}


person.whoAmI()
//output: I am  Magesh

var product = {
    name: 'Pen'
}

//borrow 'whoAmI' from 'person' and operate on 'product'
person.whoAmI.call(product)
//output: I am  Pen