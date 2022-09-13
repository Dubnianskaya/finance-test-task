import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { authOperations } from '../redux/auth';
import { AuthForm } from '../components/Form';
import { AuthPages } from '../components/Container/Container.styled';

export function LoginPage () {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (data) => {
        dispatch(authOperations.logIn(data)).unwrap()
        .then(() => {
            navigate('/');
          })
        .catch(error => {
          if (error) {
            return toast.error(`Wrong credentials`);
          } 
        });
        
    };

    return (
        <AuthPages>
         <AuthForm data-testid="login-page" onFormSubmit={handleSubmit} title={"LOGIN"} buttonText={"Login"}/>
        </AuthPages>
    )
}