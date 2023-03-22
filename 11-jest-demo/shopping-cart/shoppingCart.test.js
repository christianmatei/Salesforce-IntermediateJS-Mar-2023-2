import { Product, ShoppingCart } from './shoppingCart'

test('Subscriber notified when a new product is added', () => {
    //Arrange
    const cart = new ShoppingCart()
    const testProduct1 = new Product(100, 'Pen', 10)
    const testProduct2 = new Product(101, 'Pencil', 5)
    const mockCallback = jest.fn()
    cart.subscribe('new-product', mockCallback)

    //Act
    cart.add(testProduct1, 10)
    cart.add(testProduct2, 5)
    //Assert
    expect(cart.total()).toBe(125)
    expect(cart.items()).toHaveLength(2)
    expect(mockCallback.mock.calls).toHaveLength(2)

    console.log(mockCallback.mock.calls[0][0])
    console.log(mockCallback.mock.calls[1][0])
})