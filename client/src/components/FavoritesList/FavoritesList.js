import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Grid from '@mui/material/Grid';
import { Container } from '../Container';
import { priceChangeFunc } from '../../functions/tableBehaviorFunc';
import { FavoriteListItem} from '../FavoriteListItem';
import { FavoriteListContainer, FavoriteListPlug } from './FavoriteList.styled'


export function FavoritesList ({tickers}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const userFavorites = useSelector(authSelectors.getUserFavotite);
    const favoriteArray = userFavorites.map((idx) => tickers?.currentState[idx]);
    const isDataFetched = tickers.currentState.length !== 0;

    return (
        <Container>
        {isLoggedIn && isDataFetched
        ? (
        <FavoriteListContainer>
        <Grid container spacing={1} justifyContent="center">
        {favoriteArray.map((ticker) => {
            const increasedPrice = priceChangeFunc(tickers, ticker) || false;
            return (
            <Grid item  xs="auto" key={ticker?.ticker}>
               <FavoriteListItem ticker={ticker} increasedPrice={increasedPrice}/>
            </Grid>
               )})}
        </Grid>
        </FavoriteListContainer>
        ) : (
            <FavoriteListPlug />
        )}
        </Container>
    )
}

FavoritesList.propTypes = {
    tickers: PropTypes.object.isRequired,
  };