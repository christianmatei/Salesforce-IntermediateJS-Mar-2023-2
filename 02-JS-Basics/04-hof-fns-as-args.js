function add(x, y) {
    console.log('Add Result : ', x + y)
}
function subtract(x, y) {
    console.log('Subtract Result : ', x - y)
}

add(100, 200)
//output: Add Result: 300
subtract(100, 200)
//output:  Subtract Result: -100

//introducing the 'log' functionality
function logAdd(x, y) {
    console.log('Operation started...') //common
    add(x, y) //varying
    console.log('Operation completed...') //common
}
function logSubtract(x, y) {
    console.log('Operation started...') //common
    subtract(x, y) //varying
    console.log('Operation completed...') //common
}

logAdd(100, 200)
//output:
//  Operation started...
//  Add Result: 300
//  Operation completed...

logSubtract(100, 200)
//output:
//  Operation started...
//  Subtract Result: -100
//  Operation completed...


//avoiding duplication by applying 'commonality-variability'
function logOperation(operationFn, x, y) {
    console.log('Operation started...')
    operationFn(x, y)
    console.log('Operation completed...')
}


logOperation(add, 100, 200)
//output:
//  Operation started...
//  Add Result: 300
//  Operation completed...

logOperation(subtract, 100, 200)
//output:
//  Operation started...
//  Subtract Result: -100
//  Operation completed...

logOperation(function(x,y){
    console.log('Multiply Result : ', x * y)
}, 100, 200)
//output:
// Operation started...
// Multiply Result: 20000
// Operation completed...