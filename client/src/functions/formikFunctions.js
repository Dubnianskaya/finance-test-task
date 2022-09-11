import { useField } from 'formik';
import { TextFieldStyled } from '../components/Form/Form.styled';

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextFieldStyled
        id={props.name}
        {...field}
        {...props}
        label={label}
        variant="standard"
        color="primary"
        helperText={
          meta.touched && meta.error ? meta.error : null
        }
      />
    </>
  );
};

