export class Product {
    id;
    name;
    unitCost;

    constructor(id, name, unitCost) {
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

export class ShoppingCart {
    #items = [];
    callbacks = {};

    add(product, units) {
        const productItem = { ...product, units, value: product.unitCost * units }
        this.#items.push(productItem)
        this.notify('new-product', { productItem: productItem })
        if (this.total() > 300) {
            this.notify('max-limit', { cartValue: this.total() })
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

    notify(eventName, ...args) {
        const callbacks = this.callbacks[eventName] || []
        callbacks.forEach(callbackFn => callbackFn(...args))
    }
}