import { priceChangeFunc } from './priceChangeFunc';

const tickersPr = [{ticker: "qqq", price: "3"}, {ticker: "www", price: "10"}, {ticker: "eee", price: "5"}]
const tickerCurInc  = {ticker: "qqq", price: "4"}
const tickerCurDec  = {ticker: "www", price: "9"}

describe('priceChangeFunc', () => {
    test('Price increased', () => {
        expect(priceChangeFunc(tickersPr, tickerCurInc)).toBe(true)
    })
    test('Price decreased', () => {
        expect(priceChangeFunc(tickersPr, tickerCurDec)).toBe(false)
    })
    test('empty array', () => {
        expect(priceChangeFunc([], tickerCurInc)).toBe(false)
    })
    test('empty obj', () => {
        expect(priceChangeFunc(tickersPr, {})).toBe(false)
    })
    test('empty data', () => {
        expect(priceChangeFunc([], {})).toBe(false)
    })
})