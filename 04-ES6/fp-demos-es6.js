const products = [
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
    const costlyProductPredicate = function (product) {
        return product.cost > 50
    };

    useCase("Products by Cost", function(){
        function negate(predicateFn) {
            return function () {
                return !predicateFn.apply(this, arguments)
            }
        }
        useCase("Costly Products (cost > 50 )", function(){
            const costlyProducts = products.filter(costlyProductPredicate)
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
            
            const affordableProductPredicate = negate(costlyProductPredicate)
            const affordableProducts = products.filter(affordableProductPredicate)
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
        const discountedProducts = products.map(function(product){
            // ES5
            /*  
            return {
                id : product.id,
                name: product.name,
                cost : product.cost * 0.9,
                units : product.units,
                category : product.category
            } 
            */
            // ES6
            return { ...product, cost : product.cost * 0.9 }
        })
        console.table(discountedProducts)
    })
})

useCase("Reduce", function(){
    useCase("Total Products Value (sum of [cost * units])", function(){
        const totalValue = products.reduce(function(prevResult, product){
            return prevResult + (product.cost * product.units)
        }, 0)
        console.log("Total Value : ", totalValue)
    })

    useCase("Products grouped by category", function(){
        const productsByCategory = products.reduce(function(prevResult, product){
            const key = product.category
            // mutating prevResult
            /* 
            prevResult[key] = prevResult[key] || []
            prevResult[key].push(product)
            return prevResult; 
            */

            //immutable
            const result = { ...prevResult, [key] : prevResult[key] || [] }
            result[key].push(product)
            return result
        }, {})
        console.log(productsByCategory)
    })
})