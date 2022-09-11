import styled from '@emotion/styled';
import { mediaTablet } from '../../functions/media';

export const ContainerStyled = styled.div`
  padding: 0 20px;
  margin: 0 auto;
`;

export const MainPageContainer = styled.div`
padding-top: 100px;
display: flex;
flex-direction: column;
align-items: center;
${mediaTablet(`
padding-top: 120px;
`)}
`

export const AuthPages = styled.div`
padding-top: 200px;
display: flex;
flex-direction: column;
justify-content: center;
`