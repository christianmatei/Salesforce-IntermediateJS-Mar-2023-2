var products = [
    { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
    { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
    { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
    { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
    { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' },
    { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
];

function useCase(title, fn){
    console.group(title)
    fn()
    console.groupEnd()
}

useCase('Initial List', function(){
    console.table(products)
})


useCase("Filter", function(){
    // Filter (use the array.filter() method)
    // Filter all costly products (cost > 50) (result => id(9,3,7) )
    // Filter all affordable products (result => id(6,5,1))
    var costlyProductPredicate = function (product) {
        return product.cost > 50
    };

    useCase("Products by Cost", function(){
        function negate(predicateFn) {
            return function () {
                return !predicateFn.apply(this, arguments)
            }
        }
        useCase("Costly Products (cost > 50 )", function(){
            var costlyProducts = products.filter(costlyProductPredicate)
            console.table(costlyProducts)
        });

        useCase("Affordable Products (!costly products)", function(){
            /*  
            var affordableProductPredicate = function (product) {
                return product.cost > 50
            }; 
            */
            /* 
            var affordableProductPredicate = function (product) {
                return !costlyProductPredicate(product)
            }; 
            */
            
            var affordableProductPredicate = negate(costlyProductPredicate)
            var affordableProducts = products.filter(affordableProductPredicate)
            console.table(affordableProducts)
        })
    })
})

useCase("ForEach", function(){
    useCase("Applying 10% discount (mutation)", function(){
        products.forEach(function(product){
            product.cost = product.cost * 0.9
        })
        console.table(products)
    })
})

useCase("Map", function(){
    useCase("Applying 10% discount (immutability)", function(){
        var discountedProducts = products.map(function(product){
            return {
                id : product.id,
                name: product.name,
                cost : product.cost * 0.9,
                units : product.units,
                category : product.category
            }
        })
        console.table(discountedProducts)
    })
})

useCase("Reduce", function(){
    useCase("Total Products Value (sum of [cost * units])", function(){
        var totalValue = products.reduce(function(prevResult, product){
            return prevResult + (product.cost * product.units)
        }, 0)
        console.log("Total Value : ", totalValue)
    })

    useCase("Products grouped by category", function(){
        var productsByCategory = products.reduce(function(prevResult, product){
            var key = product.category
            prevResult[key] = prevResult[key] || []
            prevResult[key].push(product)
            return prevResult;
        }, {})
        console.log(productsByCategory)
    })
})