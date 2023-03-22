class Product{
    id ;
    name ;
    unitCost ;

    constructor(id, name, unitCost){
        this.id = id
        this.name = name;
        this.unitCost = unitCost
    }
}


/* 
class ShoppingCart {
    #items = [];
    maxLimitCallbacks = [] ;

    add(product, units){
        const productItem = { ...product, units, value : product.unitCost * units}
        this.#items.push(productItem)
        if (this.total() > 300 ){
            this.maxLimitCallbacks.forEach(callbackFn => callbackFn())
        }
    }
    total(){
        return this.#items.reduce((prevResult, productItem) => prevResult + productItem.value, 0)
    }
    items(){
        return [...this.#items]
    }

    subscribeMaxLimitNotification(callback){
        this.maxLimitCallbacks.push(callback)
    }
} 
*/

class ShoppingCart {
    #items = [];
    callbacks = {};

    add(product, units) {
        const productItem = { ...product, units, value: product.unitCost * units }
        this.#items.push(productItem)
        this.notify('new-product', { productItem : productItem } )
        if (this.total() > 300) {
            this.notify('max-limit', {cartValue : this.total()})
        }
    }
    total() {
        return this.#items.reduce((prevResult, productItem) => prevResult + productItem.value, 0)
    }
    items() {
        return [...this.#items]
    }

    subscribe(eventName, callback) {
        this.callbacks[eventName] = this.callbacks[eventName] || []
        this.callbacks[eventName].push(callback)
    }

    notify(eventName, ...args){
        const callbacks = this.callbacks[eventName] || []
        callbacks.forEach(callbackFn => callbackFn(...args))
    }
}

// Usage
const cart = new ShoppingCart()

const pen = new Product(100, "Pen", 10),
    pencil = new Product(101, "Pencil", 5),
    marker = new Product(105, "Marker", 20)

cart.subscribe('new-product', (item) => {
    console.log('A new product is added - ', item)
})

cart.subscribe('max-limit', (cartValue) => {
    console.log('max limit exceeded - ', cartValue);
})

cart.add(pen, 10)
// output: A new product is added

cart.add(pencil, 30)
// output: A new product is added

cart.add(marker, 5)
// output:  A new product is added
//          max limit exceeded
