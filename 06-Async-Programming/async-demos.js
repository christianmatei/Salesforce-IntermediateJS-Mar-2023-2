
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

    // Async
    function addAsync(x, y) {
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){
            const result = x + y
            console.log(`   [@service] returning the result`)
            return result
        }, 5000);
    }

    function addAsyncClient(x, y) {
        console.log(`[@client] invoking the service`)
        const result = addAsync(x, y)
        console.log(`[@client] operation completed. result = ${result}`)
    }
    window['addAsyncClient'] = addAsyncClient;

})()