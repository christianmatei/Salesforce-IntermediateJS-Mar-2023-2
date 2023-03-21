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