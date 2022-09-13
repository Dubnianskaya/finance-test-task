import {render} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../AppRoutes';
import { store } from '../../redux';

export const renderTestApp = (component, options) => {

 return render (
 <Provider store={store}>
    <MemoryRouter initialEntries={[options?.route]}>
    <AppRouter />
    {component}
    </MemoryRouter>
</Provider>
 )
}

