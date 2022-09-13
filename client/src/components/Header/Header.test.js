import {screen} from '@testing-library/react'
import { renderTestApp } from '../../tests/helpers/renderTestApp'

describe('Header component', () => {
    it('Header renders', () => {
        renderTestApp(null, {route: ['/', '/login', '/register']})
        const header = screen.getByRole('banner');

        expect(header).toBeInTheDocument();
    });

})