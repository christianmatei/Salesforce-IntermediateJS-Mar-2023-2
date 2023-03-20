function fn() {
    console.log('fn invoked')
}

fn()
//Output : fn invoked

fn(10)
//Output : fn invoked

fn('Magesh')
//Output : fn invoked

var car

var car = {
    id: 100,
    model: 'Mustang',
    make: 'Ford'
}

fn(car)
//Output : fn invoked

fn(100, "Magesh", car)
//Output : fn invoked
