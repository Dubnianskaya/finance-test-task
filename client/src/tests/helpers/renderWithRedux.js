import {store} from '../../redux';
import {render} from '@testing-library/react';
import { Provider } from 'react-redux';

export const renderWithRedux = (component, initialState) => {

    return render (
        <Provider store={store}>
            {component}
        </Provider>
    )
}