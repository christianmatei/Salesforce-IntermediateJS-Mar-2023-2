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


//3: Functions can have Methods (like objects)
//Object
var product = {}
product['whoAmI'] = function () {
    console.log('I am a Product');
}
product.whoAmI()
//output: I am a Product

//Function
function fn() {
    console.log('fn invoked')
}
fn['whoAmI'] = function () {
    console.log('I am a function');
}
fn.whoAmI()
//output: I am a function