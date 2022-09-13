import { breakPoints } from '../libs/constants';

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