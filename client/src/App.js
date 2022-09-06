import { Routes, Route, Navigate } from 'react-router-dom';
import { Global } from '@emotion/react';
import { Layout } from './components/Layout';
import { MainPage } from './pages/MainPage';
import { GlobalStyles} from './styles';

function App() {
  return (
    <>
    <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;