import {render, screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import {Navigation} from './Navigation';

describe('Navigation component', () => {
    it('Navigation renders', () => {
        render(
           <MemoryRouter>
            <Navigation/>
           </MemoryRouter>);
        const navigation = screen.getByRole('navigation');
        const loginBtn = screen.getByText('Sign in');
        const registerBtn = screen.getByText('Sign up');

        expect(navigation).toBeInTheDocument();
        expect(loginBtn).toBeInTheDocument();
        expect(registerBtn).toBeInTheDocument();
    });
//    it('Navigation login works', async () => {
//         renderTestApp(null, {route: '/'})
//         const loginBtn = screen.getByText('Sign in');
//         userEvent.click(loginBtn)
//         expect(screen.getByTestId('login-page')).toBeInTheDocument();
//     });
//     it('Navigation register works', async () => {
//         renderTestApp(null, {route: '/'})
//         const registerBtn = screen.getByText('Sign up');
//         userEvent.click(registerBtn)
//         expect(screen.getByTestId('register-page')).toBeInTheDocument();
//     });

})