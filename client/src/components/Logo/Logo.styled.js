import styled from "@emotion/styled";
import { mediaTablet } from '../../functions/media';

export const LogoStyled = styled.p`
color: #fff;
font-size: 20px;
font-weight: 700;
${mediaTablet(
    `font-size: 28px;`
  )}
`