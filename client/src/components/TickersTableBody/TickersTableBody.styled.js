import styled from "@emotion/styled";
import TableCell from '@mui/material/TableCell';
import { mediaTablet } from '../../functions/media';

export const NameBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #002469;
color: #fff;
border-radius: 4px;
width: 52px;
height: 24px;
font-size: 10px;
padding: 4px;
${mediaTablet(`
  font-size: 14px;
  padding: 6px;
  width: 60px;
  height: 24px;
`)}
`

export const TableBodyText = styled(TableCell)`
font-size: 10px;
padding: 6px;
${mediaTablet(`
  font-size: 14px;
  padding: 6px 16px;
  `
)}
`

const setPriceStatus = ({isIncreased}) => {
    return isIncreased ? "#137333" : "#a50e0e"
}

const setPriceStatusBackground = ({isIncreased}) => {
    return isIncreased ? "#e6f4ea" : "#fce8e6"
}

export const PriceInc = styled.p`
color: ${setPriceStatus};
`

export const PriceChange = styled.p`
color: ${setPriceStatus};
`

export const PricePercent = styled.p`
border-radius: 2px;
padding: 4px;
color: ${setPriceStatus};
background-color: ${setPriceStatusBackground};
${mediaTablet(`
  padding: 6px;
`)}
`