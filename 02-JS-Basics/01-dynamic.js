var car = {
    id: 100,
    model: 'Mustang',
    make: 'Ford'
}

car.id
// 100
car['id']
// 100

//change the value of an existing attribute (use the '.' notation)
car.id = 200
// 200

//introduce a new attribute (use [] notation)
car['year'] = 1998
// 1998

// remove an existing attribute
// Good practice : assign 'undefined' as a value to the attribute instead of deleting it
delete car.id 