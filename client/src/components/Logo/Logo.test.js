import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderTestApp } from '../../tests/helpers/renderTestApp';


describe('Logo component', () => {
    it('Logo renders', () => {
        renderTestApp(null, {route: ['/', '/login', '/register']})
        const link = screen.getByTestId('logo-link');

        expect(link).toBeInTheDocument();
    });
    it('Logo navigate', () => {
        renderTestApp(null, {route: '/'})

        const link = screen.getByTestId('logo-link');
        userEvent.click(link)

        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });
})