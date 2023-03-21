// ES5
/* 
function add(){
    var result = 0
    for (var i = 0; i < arguments.length; i++){
        if (!isNaN(arguments[i]))
            result += parseInt(arguments[i])
    }
    return result
}
*/

// ES6
function add(...args) {
    var result = 0
    for (var i = 0; i < args.length; i++) {
        if (!isNaN(args[i]))
            result += parseInt(args[i])
    }
    return result
}

//Modify the above function to behave as the following
//Hint : use typeof, isNaN(), parseInt() functions

add(10,20) //=> 30
add(10) //=> 10
add() //=> 0 
add(10,20,30,40,50) //=> 150
add("10") //=> 10
add("abc") //=> 0
add(10, 20, 30, "40", 50) //=> 150
add(10, 20, 30, 40, 50, "abc") //=> 150