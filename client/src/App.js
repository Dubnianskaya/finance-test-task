import { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Global } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import { Layout } from './components/Layout';
import { MainPage } from './pages/MainPage';
import { GlobalStyles} from './styles';

const createChunk = (componentName) => {
  return lazy(() =>
    import(`./pages/${componentName}`).then((module) => ({
      default: module[componentName],
    }))
  );
};

const LoginPage = createChunk("LoginPage");
const RegisterPage = createChunk("RegisterPage");

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
    <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />}/>
            <Route path="login" element={<LoginPage />}/>
            <Route path="register" element={<RegisterPage />}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;