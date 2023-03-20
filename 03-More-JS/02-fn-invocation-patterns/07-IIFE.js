// Immediately Invoked Function Expression
(function fn() {
    console.log('fn invoked')
})()
//output: fn invoked

(function add(x, y) {
    console.log('Add Result : ', x + y)
})(100, 200)
//output: Add Result: 300

(function subtract(x, y) {
    return x - y;
})(100, 200)
//output: - 100