import styled from "@emotion/styled";
import TextField from '@mui/material/TextField';
import { Form } from 'formik';
import { mediaTablet } from '../../functions/media';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h1`
  font-size: 26px;
  line-height: 26px;
  margin-bottom: 24px;
  text-align: center;
  ${mediaTablet(
    ` font-size: 34px;
      line-height: 41px;
      margin-bottom: 32px;`
  )}
`;

export const TextFieldStyled = styled(TextField)`
  display: block;
  margin-bottom: 16px;
  ${mediaTablet(` 
  margin-bottom: 20px;
 `)}
  label {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
  }
  input {
    width: 280px;
    ${mediaTablet(` 
     width: 320px;
 `)}
    position: relative;
    // border-bottom: 1px solid #e0e0e0;
    padding-bottom: 7px;
  }
  p {
    position: absolute;
    margin-top: 0;
    color: #f0000f;
  }
`;