function add() {
    var result = 0
    for (var i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i]))
            result += parseInt(arguments[i])
    }
    console.log('Result : ', result)
}

//avoiding duplication by applying 'commonality-variability'
function logOperation(operationFn) {
    return function () {
        console.log('Operation started...')
        operationFn.apply(this, arguments)
        console.log('Operation completed...')
    }
}

var logAdd = logOperation(add)
logAdd(10, 20) //=> 30
logAdd(10) //=> 10
logAdd() //=> 0 
logAdd(10, 20, 30, 40, 50) //=> 150
logAdd("10") //=> 10
logAdd("abc") //=> 0
logAdd(10, 20, 30, "40", 50) //=> 150
logAdd(10, 20, 30, 40, 50, "abc") //=> 150

//modify the profile() function accordingly
//profiling
function profile(operationFn) {
    return function () {
        console.time('operation')
        operationFn.apply(this, arguments)
        console.timeEnd('operation')
    }
}

var profileAdd = profile(add)
profileAdd(10, 20) //=> 30
profileAdd(10) //=> 10
profileAdd() //=> 0 
profileAdd(10, 20, 30, 40, 50) //=> 150
profileAdd("10") //=> 10
profileAdd("abc") //=> 0
profileAdd(10, 20, 30, "40", 50) //=> 150
profileAdd(10, 20, 30, 40, 50, "abc") //=> 150



// combining logging & profiling (function composition)
var logAdd = logOperation(add)
var profileLogAdd = profile(logAdd)
profileLogAdd(10, 20) //=> 30
profileLogAdd(10) //=> 10
profileLogAdd() //=> 0 
profileLogAdd(10, 20, 30, 40, 50) //=> 150
profileLogAdd("10") //=> 10
profileLogAdd("abc") //=> 0
profileLogAdd(10, 20, 30, "40", 50) //=> 150
profileLogAdd(10, 20, 30, 40, 50, "abc") //=> 150

