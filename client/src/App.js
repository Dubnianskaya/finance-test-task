import { useEffect, lazy } from 'react';
import { AppRouter } from './AppRoutes';
import { Global } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import { GlobalStyles} from './styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
    <Global styles={GlobalStyles} />
      <AppRouter />
    </>
  );
}

const AppWithWrappers = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default AppWithWrappers;