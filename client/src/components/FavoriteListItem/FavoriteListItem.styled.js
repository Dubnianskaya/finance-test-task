import styled from '@emotion/styled';
import { mediaTablet } from '../../functions/media';

const setPriceStatus = ({isIncreased}) => {
    return isIncreased ? "#74cc4d" : "#a50e0e"
}

export const FavName = styled.p`
display: block;
font-size: 10px;
font-weight: 700;
${mediaTablet(`
  font-size: 14px;
`)}
`

export const FavPrice = styled.p`
display: block;
font-size: 10px;
font-weight: 700;
color: ${setPriceStatus};
${mediaTablet(`
  font-size: 14px;
`)}
`

export const FavContainer = styled.div`
  width: 114px;
  padding: 8px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  ${mediaTablet(`
  width: 154px;
`)}
`
export const RightSideContainer = styled.div`
margin-right: 8px;
${mediaTablet(`
margin-right: 16px;
`)}
`