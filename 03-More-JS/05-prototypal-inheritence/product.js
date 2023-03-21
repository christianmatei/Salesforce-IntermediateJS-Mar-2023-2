function Product(id, name, cost) {
    this.id = id;
    this.name = name;
    this.cost = cost;
}
Product.prototype.print = function () {
    console.log('id = ', this.id, ',name = ', this.name, ',cost = ', this.cost);
}

