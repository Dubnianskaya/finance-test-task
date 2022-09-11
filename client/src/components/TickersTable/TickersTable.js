import { useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { TickersTableBody } from '../TickersTableBody';
import { TablePositionContainer, TableHeader, TableHeaderText } from './TickersTable.styled';
import { priceChangeFunc, TickerTableScreenSize } from '../../functions/tableBehaviorFunc';
import { FormModal } from '../Modal';
import { useWindowDimensions } from '../../hooks';
import { breakPoints, tickersName, phoneTickers } from '../../libs/constants';

export function TickersTable ({tickers}) {
    const tickersArray = tickers.currentState || [];
    const isLoading = useSelector(authSelectors.getIsRefreshing);
    const userFavorites = useSelector(authSelectors.getUserFavotite);
    const isSelected = (name) => userFavorites.indexOf(name) !== -1;
    const isDataFetched = tickers.currentState.length !== 0;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const windowDimensions = useWindowDimensions();

    
    return (
      <TablePositionContainer>
      {isDataFetched && !isLoading && (
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableHeader>
              {windowDimensions.width >=
                breakPoints.TABLET && tickersName.map((ticker) => (
                  <TableHeaderText key={ticker}>{ticker}</TableHeaderText>
                ))}
              {windowDimensions.width <
                breakPoints.TABLET && phoneTickers.map((ticker) => (
                  <TableHeaderText key={ticker}>{ticker}</TableHeaderText>
                ))}
            </TableHeader>
          </TableHead>
          <TableBody>
            {tickersArray.map((ticker) => {
              const index = tickersArray.indexOf(ticker);
              const isItemSelected = isSelected(index);
              const increasedPrice = priceChangeFunc(tickers, ticker) || false;
              const tickersByScreenSize = TickerTableScreenSize(ticker, windowDimensions)
              return (
                <TickersTableBody key={ticker.ticker} selected={userFavorites} ticker={tickersByScreenSize} isItemSelected={isItemSelected} index={index} increasedPrice={increasedPrice} handleOpen={handleOpen}/>
            )})}
          </TableBody>
        </Table>
      </TableContainer>
      )}
        <FormModal open={open} setOpen={setOpen}/>
      </TablePositionContainer>
    );
}

TickersTable.propTypes = {
  tickers: PropTypes.object.isRequired,
};