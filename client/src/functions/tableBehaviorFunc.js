import { breakPoints } from '../libs/constants';

export function priceChangeFunc (prevTicker, currentTicker) {
        if (prevTicker.prevState.length === 0) {
            return
        } else {
            const oldPrice = prevTicker.prevState.find(prevTicker => prevTicker.ticker === currentTicker.ticker).price;
            return Number(oldPrice) < Number(currentTicker.price)
        }
}

export const TickerTableScreenSize = (tickerValues, windowDimension) => { 
    const {ticker, price, change, change_percent} = tickerValues;
    if(windowDimension.width >=
      breakPoints.TABLET) {
        return tickerValues;
      } else if (windowDimension.width <
        breakPoints.TABLET) {
          return {ticker, price, change, change_percent}
        }
  }