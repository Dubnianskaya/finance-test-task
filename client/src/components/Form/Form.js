import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import { MyTextInput } from '../../functions/formikFunctions';
import { FormStyled, FormTitle } from './Form.styled';
import { Container } from '../Container';
import { emailRegExp } from '../../libs/constants';

export function AuthForm({onFormSubmit, title="", buttonText=""}) {

  return (
    <Container>
    <FormTitle>{title}</FormTitle>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
        .email('Wrong email')
        .required('Email is required')
        .matches(
          emailRegExp,
          'email must be like: name@mail.com'
        ),
        password: Yup.string()
          .min(6, "Password must be minimum 6 symbols")
      })}
      onSubmit={values => {
        onFormSubmit(values);
      }}
    >
      <FormStyled>
              <MyTextInput
                label="Email"
                name="email"
                type="email"
              />
              <MyTextInput
                label="Password"
                name="password"
                type="text"
              />
          <Button type="submit" variant="contained" size="large">{buttonText}</Button>
          </FormStyled>
    
    </Formik>
  </Container>
  );
}

AuthForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};