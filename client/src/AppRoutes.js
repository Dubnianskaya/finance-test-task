import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { MainPage } from './pages/MainPage';

const createChunk = (componentName) => {
    return lazy(() =>
      import(`./pages/${componentName}`).then((module) => ({
        default: module[componentName],
      }))
    );
  };
  
  const LoginPage = createChunk("LoginPage");
  const RegisterPage = createChunk("RegisterPage");

export function AppRouter () {
    return (
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />}/>
            <Route path="login" element={<LoginPage />}/>
            <Route path="register" element={<RegisterPage />}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
    )
}