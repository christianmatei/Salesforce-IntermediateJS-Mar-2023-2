
(function(){
    // sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const result = x + y
        console.log(`   [@service] returning the result`)
        return result
    }

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`)
        const result = addSync(x,y)
        console.log(`[@client] operation completed. result = ${result}`)
    }
    window['addSyncClient'] = addSyncClient;

    // Async - (using callback)
    function addAsync(x, y, callback) {
        console.log(`   [@service] initializing processing ${x} and ${y}`)
        setTimeout(function(){
            const result = x + y
            console.log(`   [@service] returning the result`)
            if (typeof callback === 'function')
                callback(result)
        }, Math.random() * 10000);
    }

    function addAsyncClient(x, y) {
        console.log(`[@client] invoking the service`)
        addAsync(x, y, function(result){
            console.log(`[@client] operation completed. result = ${result}`)
        })
    }
    window['addAsyncClient'] = addAsyncClient;

    // Async - (using promise)
    function addAsyncPromise(x, y) {
        console.log(`   [@service] initializing processing ${x} and ${y}`)
        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function () {
                const result = x + y
                console.log(`   [@service] returning the result`)
                resolveFn(result)
            }, Math.random() * 10000);
        })        
        return p;
    }

    function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`);
        var p = addAsyncPromise(x,y)
        //.then(fn), .catch(fn)
        p.then(result => {
            console.log(`[@client] result = ${result}`);
        })
    }
    window['addAsyncPromiseClient'] = addAsyncPromiseClient;

    function divideAsyncPromise(x, y) {
        console.log(`   [@service] initializing processing ${x} and ${y}`)
        const p = new Promise(function (resolveFn, rejectFn) {
            setTimeout(function () {
                if (y === 0)
                    return rejectFn(new Error('Cannot divide by 0'))
                const result = x / y
                console.log(`   [@service] returning the result`)
                resolveFn(result)
            }, Math.random() * 10000);
        })
        return p;
    }

    function divideAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`);
        var p = divideAsyncPromise(x, y)
        p.then(result => console.log(`[@client] result = ${result}`))
        p.catch(err => console.log('[@client] something went wrong - ', err))
    }

    window['divideAsyncPromiseClient'] = divideAsyncPromiseClient
})()