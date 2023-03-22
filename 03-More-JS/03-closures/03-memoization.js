var isPrime = (function(){
    var cache = {}
    function isPrime(no) {
        console.log('processing ', no)
        for (var i = 2; i <= (no / 2); i++) {
            if (no % i === 0) return false
        }
        return true
    }
    return function(no){
        if (cache.hasOwnProperty(no))
            return cache[no]
        cache[no] = isPrime(no)
        return cache[no]
    }
})()

// Create a memoized version of 'isOdd' & 'isEven' functions
/* var isEven = (function () {
    var cache = {}
    function isEven(no) {
        console.log('processing ', no)
        return no % 2 === 0 ? true : false
    }
    return function (no) {
        if (cache.hasOwnProperty(no))
            return cache[no]
        cache[no] = isEven(no)
        return cache[no]
    }
})()

var isOdd = (function () {
    var cache = {}
    function isOdd(no) {
        console.log('processing ', no)
        return no % 2 !== 0 ? true : false
    }
    return function (no) {
        if (cache.hasOwnProperty(no))
            return cache[no]
        cache[no] = isOdd(no)
        return cache[no]
    }
})()

 */

// Generic memoize - v1.0
function memoize(fn) {
    var cache = {}
    return function (no) {
        if (cache.hasOwnProperty(no))
            return cache[no]
        cache[no] = fn(no)
        return cache[no]
    }
}

var isPrime = memoize(function(no) {
    console.log('processing ', no)
    for (var i = 2; i <= (no / 2); i++) {
        if (no % i === 0) return false
    }
    return true
})

var isEven = memoize(function (no) {
    console.log('processing ', no)
    return no % 2 === 0 ? true : false
})

var isOdd = memoize(function (no) {
    console.log('processing ', no)
    return no % 2 !== 0 ? true : false
})


// Generic memoize - v2.0
function memoize(fn) {
    var cache = {}
    return function() {
        var key = JSON.stringify(arguments)
        if (cache.hasOwnProperty(key))
            return cache[key]
        cache[key] = fn.apply(this, arguments)
        return cache[key]
    }
}
var add = memoize(function (x,y){
    console.log('processing ', x , ' and ', y)
    return x + y
})

// Generic memoize - v3.0
function memoize(fn, keyFn) {
    var cache = {}
    return function () {
        var key = keyFn.apply(this, arguments)
        if (cache.hasOwnProperty(key))
            return cache[key]
        cache[key] = fn.apply(this, arguments)
        return cache[key]
    }
}

// Generic memoize - v4.0 (ES6)
function memoize(fn, keyFn) {
    var cache = {}
    return function (...args) {
        var key = keyFn(...args)
        if (cache.hasOwnProperty(key))
            return cache[key]
        cache[key] = fn(...args)
        return cache[key]
    }
}
var add = memoize(function (x, y) {
    console.log('processing ', x, ' and ', y)
    return x + y
}, function(x,y){
    return x + '-' + y;
})