import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { authOperations } from '../redux/auth';
import { AuthForm } from '../components/Form';
import { AuthPages } from '../components/Container/Container.styled';

export function RegisterPage () {
    const dispatch = useDispatch();
    const navigate = useNavigate();

     const handleSubmit = (data) => {
        dispatch(authOperations.register(data)).unwrap()
        .then(() => {
            navigate('/login');
          })
        .catch(error => {
          if (error) {
            return toast.error(`Mail already in use`);
          } 
        });
    };

    return (
        <AuthPages>
        <AuthForm data-testid="register-page" onFormSubmit={handleSubmit} title={"REGISTER"} buttonText={"Register"}/>
        </AuthPages>
    )
}