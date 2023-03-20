//Object & Function

//1: Creation
//Object Creation

//object expression syntax
var product = {}


//Function Creation
//Function Statement syntax
function fn() {
    console.log('fn invoked');
}

//function expression syntax
var fx = function () {
    console.log('fx invoked')
}


fn()
//output: fn invoked

fx()
//output: fx invoked

//2: Functions can have attributes (like objects)
//Attributes
//Objects
var product = {}
product['id'] = 100
console.log(product)


//Functions
function fn() {
    console.log('fn invoked');
}
fn['id'] = 100
console.log(fn.id)
//output : 100