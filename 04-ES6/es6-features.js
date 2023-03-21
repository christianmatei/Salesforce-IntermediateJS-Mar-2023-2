/* 
    1. let
    2. const
    3. array destructuring
    4. rest operator (array)
    5. spread operator (array)
    6. object destructuring
    7. rest operator (object)
    8. spread operator (object)
    9. default arguments
    10. arrow functions
*/

// let

// const

// 3. array destructuring
var nos = [3, 1, 4, 2, 5]
var [x, y] = nos

// 4. rest operator (array)
var nos = [3, 1, 4, 2, 5]
var [x, y, ...z] = nos
// using rest operation in function arguments
var nos = [10, 20]
function add(x, y) {
    return x + y
}
add(nos[0], nos[1])
// output: 30
add(...nos)
// output: 30

// 5. spread operator (array)
let nos = [3, 1, 4, 2, 5]
let newNos = [...nos, 10, 20, 30]
// using spread operator in function parameters
function sum(...list) {
    return list.reduce(function (x, y) { return x + y })
}
sum(10)
// output: 10
sum(10, 20)
// output: 30
sum(10, 20, 30, 40)
// output: 100

// 6. object destructuring
var emp = { id: 100, name: 'Magesh', city: 'Bangalore' }
var { id, city } = emp
var { id: x, city: y } = emp

// 7. rest operator (object)
var emp = { id: 100, name: 'Magesh', city: 'Bangalore' }
var { id, ...z } = emp

// 8. spread operator (object)
var emp = { id: 100, name: 'Magesh', city: 'Bangalore' }
var newEmp = { ...emp, salary: 10000 }

// 9. default arguments
function add(x = 10, y = 20) {
    return x + y
}

add()
// output: 30
add(100)
// output: 120
add(undefined, 200)
// output: 210
add(100, 200)
// output: 300

// 10. arrow functions
/*
// function statement
function add(x,y){
    return x + y
}

// function expression
var add = function(x,y){
    return x + y
}

// arrow function (1)
var add = (x,y) => {
    return x + y
}
*/

// arrow function (2)
var add = (x, y) => x + y
add(100, 200)
// output: 300
typeof add
// output: 'function'