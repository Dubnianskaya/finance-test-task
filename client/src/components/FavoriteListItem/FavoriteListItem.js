import PropTypes from 'prop-types';
import Card from "@mui/material/Card";
import { FavName, FavPrice, FavContainer, RightSideContainer } from './FavoriteListItem.styled';

export function FavoriteListItem ({ticker, increasedPrice}) {
    return (
        <Card>
            <FavContainer>
            <RightSideContainer>
            <FavName>{ticker.ticker}</FavName>
            <FavPrice isIncreased={increasedPrice}>{ticker.price}</FavPrice>
            </RightSideContainer>
            <div>
            <FavPrice isIncreased={increasedPrice}>{increasedPrice ? `+${ticker.change} $` : `-${ticker.change} $`}</FavPrice>
            <FavPrice isIncreased={increasedPrice}>{increasedPrice ? `+${ticker.change_percent} %` : `-${ticker.change_percent} %`}</FavPrice>
            </div>
            </FavContainer>
        </Card>
    )
}

FavoriteListItem.propTypes = {
    ticker: PropTypes.object.isRequired,
    increasedPrice: PropTypes.bool.isRequired,
  };