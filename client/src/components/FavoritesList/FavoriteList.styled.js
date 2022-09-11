import styled from "@emotion/styled";
import { mediaTablet, mediaDesktop } from '../../functions/media';

export const FavoriteListContainer = styled.div`
width: 256px;
display: flex;
min-height: 153px;
padding-bottom: 20px;
align-items: baseline;
${mediaTablet(
  `width: 720px;
   min-height: 124px;
  `
)}
${mediaDesktop(
  ` width: 1100px;
    padding-top: 16px;
  `
)}
`

export const FavoriteListPlug = styled.div`
height: 153px;
${mediaTablet(
  ` height: 124px;
  `
)}
${mediaDesktop(
  ` width: 1100px;`
)}
`