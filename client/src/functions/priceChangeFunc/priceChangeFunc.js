export function priceChangeFunc (prevTickersArray, currentTicker) {
    if (prevTickersArray.length === 0) {
        return false;
    } else {
        const oldPrice = prevTickersArray.find(ticker => ticker.ticker === currentTicker.ticker)?.price;
        return Number(oldPrice) < Number(currentTicker.price)
    }
}