import styled from "@emotion/styled";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { mediaTablet, mediaDesktop } from '../../functions/media';

export const TablePositionContainer = styled.div`
display: flex;
justify-items: center;
max-width: 320px;
${mediaTablet(
  ` max-width: 720px;`
)}
${mediaDesktop(
  ` max-width: 744px;`
)}
`

export const TableHeader = styled(TableRow)`
background-color: #002469;
`

export const TableHeaderText = styled(TableCell)`
color: #fff;
text-align: center;
font-size: 10px;
padding: 6px;
${mediaTablet(`
  max-width: 720px;
  font-size: 14px;
  padding: 6px 16px;
  `
)}
${mediaDesktop(
  ` max-width: 744px;`
)}
`

const setPriceStatus = ({isIncreased}) => {
    return isIncreased ? "#00FF00" : "#FF0000"
}

export const PriceInc = styled.p`
color: ${setPriceStatus}
`

export const PriceChange = styled.p`
color: ${setPriceStatus}
`

export const PricePercent = styled.p`
border-radius: 2px;
padding: 6px;
background-color: ${setPriceStatus}
`