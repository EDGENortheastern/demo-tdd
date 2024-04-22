describe('Example Test', () => {
    test('that jest is working', () => {
        expect(true).toBe(true); 
    });
});

// Import the function we haven't implemented yet
const { convertDollarsToRoubles } = require('./index');

describe('Currency Converter', () => {
    test('converts 100 dollars to roubles at exchange rate 77.75', () => {
        const dollarsAmount = 100;
        const exchangeRate = 77.75;
        const expectedRoublesAmount = 7775;
        const result = convertDollarsToRoubles(dollarsAmount, exchangeRate);
        expect(result).toBe(expectedRoublesAmount);
    });
});