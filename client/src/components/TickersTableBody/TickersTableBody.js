import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from '../../redux/auth';
import { authSelectors } from '../../redux/auth';
import { NameBox, PriceInc, PriceChange, PricePercent, TableBodyText } from './TickersTableBody.styled';

export function TickersTableBody ({selected, ticker, isItemSelected, index, increasedPrice, handleOpen}) {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
 
    const handleClick = (event, name) => {
      if (!isLoggedIn) {
        handleOpen()
      } else {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
      dispatch(authOperations.fetchUserFavorites(newSelected));
      }
    };

    return (
        <>
        <TableRow
              hover
              onClick={(event) => handleClick(event, index)}
              role="checkbox"
              aria-checked={isItemSelected}
              selected={isItemSelected}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableBodyText component="th" scope="row">
                <NameBox>{ticker.ticker}</NameBox>
              </TableBodyText>
              {ticker.exchange && (<TableBodyText align="right">{ticker.exchange}</TableBodyText>)}
              <TableBodyText align="right">
                <PriceInc isIncreased={increasedPrice}>{ticker.price}</PriceInc>
              </TableBodyText>
              <TableBodyText align="right">
                <PriceChange isIncreased={increasedPrice}>{increasedPrice ? `+${ticker.change} $` : `-${ticker.change} $`}</PriceChange>
              </TableBodyText>
              <TableBodyText align="right">
                <PricePercent isIncreased={increasedPrice}>{increasedPrice ? `+${ticker.change_percent} %` : `-${ticker.change_percent} %`}</PricePercent>
              </TableBodyText>
              {ticker.dividend && (<TableBodyText align="right">{ticker.dividend}</TableBodyText>)}
              {ticker.dividend && (<TableBodyText align="right">{ticker.yield}</TableBodyText>)}
              <TableBodyText align="right">
              <Checkbox
              color="primary"
              checked={isItemSelected}
              inputProps={{
                'aria-label': 'select favorite tickers',
              }}
              icon={<StarBorderIcon />}
              checkedIcon={<StarIcon />}
              sx={{
                '&:hover': { bgcolor: 'transparent' },
              }}
             /></TableBodyText>
            </TableRow>
        </>
    )
}

TickersTableBody.propTypes = {
  selected: PropTypes.array.isRequired,
  ticker: PropTypes.object.isRequired,
  isItemSelected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  increasedPrice: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
};