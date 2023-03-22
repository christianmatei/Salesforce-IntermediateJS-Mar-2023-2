import { calculator } from "./calc";

test('calculator.add(10,20) => 30', () => {
    //arrange
    const n1 = 10,
        n2 = 20,
        expectedResult = 30

    //act
    const actualResult = calculator.add(n1, n2)

    //assert
    expect(actualResult).toBe(expectedResult)
})

test('calculator.subtract(10,20) => -10', () => {
    //arrange
    const n1 = 10,
        n2 = 20,
        expectedResult = -10

    //act
    const actualResult = calculator.subtract(n1, n2)

    //assert
    expect(actualResult).toBe(expectedResult)
})

test('calculator.multiply(10,20) => 200', () => {
    //arrange
    const n1 = 10,
        n2 = 20,
        expectedResult = 200

    //act
    const actualResult = calculator.multiply(n1, n2)

    //assert
    expect(actualResult).toBe(expectedResult)
})