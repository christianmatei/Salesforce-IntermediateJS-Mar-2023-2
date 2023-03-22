
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

})()