
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
        console.log(`   [@service] initializing [add] processing ${x} and ${y}`)
        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function () {
                const result = x + y
                console.log(`   [@service] returning [add] the result`)
                resolveFn(result)
            }, Math.random() * 10000);
        })        
        return p;
    }

    window['addAsyncPromise'] = addAsyncPromise;


    
    /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`);
        var p = addAsyncPromise(x,y)
        //.then(fn), .catch(fn)
        return p.then(result => {
            console.log(`[@client] result = ${result}`);
        })
    } 
    */ 
   

    
   async function addAsyncPromiseClient(x, y) {
        console.log(`[@client] invoking the service`);
        var result = await addAsyncPromise(x, y)
        console.log(`[@client] result = ${result}`);
        const doubleResult = result * 2
        return doubleResult;
    }  
   

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;

    function divideAsyncPromise(x, y) {
        console.log(`   [@service] initializing [divide] processing ${x} and ${y}`)
        const p = new Promise(function (resolveFn, rejectFn) {
            setTimeout(function () {
                if (y === 0)
                    return rejectFn(new Error('Cannot divide by 0'))
                const result = x / y
                console.log(`   [@service] returning [divide] the result`)
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

    /* 
    async function doAddAndDivide(x,y){
        const addResult = await addAsyncPromise(x,y)
        console.log(`addResult = ${addResult}`)
        const divideResult = await divideAsyncPromise(x,y)
        console.log(`divideResult = ${divideResult}`)
    } 
    */

    /* function doAddAndDivide(x, y) {
        addAsyncPromise(x, y)
            .then(addResult => {
                console.log(`addResult = ${addResult}`)
                divideAsyncPromise(x, y)
                    .then(divideResult => {
                        console.log(`divideResult = ${divideResult}`)
                    })
            })
    }  */

   /* 
    function doAddAndDivide(x, y) {
        addAsyncPromise(x, y)
            .then(addResult => {
                console.log(`addResult = ${addResult}`)
            })
        divideAsyncPromise(x, y)
            .then(divideResult => {
                console.log(`divideResult = ${divideResult}`)
            })
    }  
    */
    /* 
    function doAddAndDivide(x, y) {
        const addPromise = addAsyncPromise(x, y)
        const dividePromise = divideAsyncPromise(x, y)
        Promise.all([addPromise, dividePromise])
            .then(([addResult, divideResult]) => {
                console.log(`addResult = ${addResult}`)
                console.log(`divideResult = ${divideResult}`)
            })
    }  
    */ 
    async function doAddAndDivide(x, y) {
        const addPromise = addAsyncPromise(x, y)
        const dividePromise = divideAsyncPromise(x, y)
        const [addResult, divideResult] = await Promise.all([addPromise, dividePromise])
        console.log(`addResult = ${addResult}`)
        console.log(`divideResult = ${divideResult}`)
    } 

    window['doAddAndDivide'] = doAddAndDivide
})()

// Promise Chaining 
/* 
// follow up operation is an async operation
var p = addAsyncPromise(100,200)
var p2 = p.then(result => {
    console.log(`[@client] result = ${result}`);
    var p2 = new Promise((resolveFn, rejectFn) => {
        setTimeout(() => {
            const doubleResult = result * 2;
            resolveFn(doubleResult)
        }, 5000);
    })
    return p2;
});
p2.then(doubleResult => console.log(`doubleResult = ${doubleResult}`))
*/

// follow up operation is a sync operation (and it STILL has to return a promise)
/*
var p = addAsyncPromise(100,200)
var p2 = p.then(result => {
    console.log(`[@client] result = ${result}`);
    const p2 = new Promise((resolveFn, rejectFn) => {
        const doubleResult = result * 2;
        resolveFn(doubleResult);
    })
    return p2;
});
p2.then(doubleResult => console.log(`doubleResult = ${doubleResult}`))
*/

/*
var p = addAsyncPromise(100,200)
var p2 = p.then(result => {
    console.log(`[@client] result = ${result}`);
    const doubleResult = result * 2;
    const p2 = Promise.resolve(doubleResult)
    return p2;
});
p2.then(doubleResult => console.log(`doubleResult = ${doubleResult}`))
*/

/* 
addAsyncPromise(100,200)
    .then(result => {
        console.log(`[@client] result = ${result}`);
        const doubleResult = result * 2;
        return doubleResult;
    })
    .then(doubleResult => console.log(`doubleResult = ${doubleResult}`))
*/