function add(x, y) {
    console.log('Add Result : ', x + y)
}
function subtract(x, y) {
    console.log('Subtract Result : ', x - y)
}

//avoiding duplication by applying 'commonality-variability'
function logOperation(operationFn){
    return function( x, y) {
        console.log('Operation started...')
        operationFn(x, y)
        console.log('Operation completed...')
    }
}

var logAdd = logOperation(add)
logAdd(100, 200)
//output:
//  Operation started...
//  Add Result: 300
//  Operation completed...

var logSubtract = logOperation(subtract)
logSubtract(100, 200)

//output:
//  Operation started...
//  Subtract Result: -100
//  Operation completed...

var logMultiply = logOperation(function(x,y){
    console.log('Multiply Result : ', x * y)
})
logMultiply(100,200)
//output:
// Operation started...
// Multiply Result: 20000
// Operation completed...


//profiling
function profile(operationFn){
    return function(x,y){
        console.time('operation')
        operationFn(x,y)
        console.timeEnd('operation')
    }
}

var profileAdd = profile(add)
profileAdd(100,200)

var profileSubtract = profile(subtract)
profileSubtract(100,200)

// combining logging & profiling (function composition)
var logAdd = logOperation(add)
var profileLogAdd = profile(logAdd)
profileLogAdd(100,200)

profile(logOperation(subtract))(100, 200)