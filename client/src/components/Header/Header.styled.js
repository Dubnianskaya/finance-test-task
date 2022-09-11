import styled from "@emotion/styled";
import { mediaTablet, mediaDesktop } from '../../functions/media';

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 18px 0;
  height: 86px;
  background-color: #002469;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  border-bottom: 2px solid #e0e0e0;
`

export const HeaderContainer = styled.div`
width: 300px;
display: flex;
justify-content: space-between;
align-items: baseline;
${mediaTablet(
  ` width: 680px;`
)}
${mediaDesktop(
  ` width: 704px;`
)}
`