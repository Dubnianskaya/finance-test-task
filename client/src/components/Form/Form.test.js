import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {AuthForm} from './Form';

const onFormSubmit = jest.fn();

describe('Form component', () => {
    it('Form renders', () => {
        render(<AuthForm onFormSubmit={onFormSubmit} title="" buttonText=""/>);
        const btn = screen.getByRole('button');
        const mailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);

        expect(btn).toBeInTheDocument();
        expect(mailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });
    it('Form snapshot', () => {
        const form = render(<AuthForm onFormSubmit={onFormSubmit} title="" buttonText=""/>);

        expect(form).toMatchSnapshot();
    });

    it('Input event', async () => {
        render(<AuthForm onFormSubmit={onFormSubmit} title="" buttonText=""/>);
        const mailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        expect(mailInput).toContainHTML('');
        expect(passwordInput).toContainHTML('');
        fireEvent.input(mailInput, {
            target: {value: 'john.dee@someemail.com'}
        })
        fireEvent.input(passwordInput, {
            target: {value: '111111'}
        })
        await waitFor(() => {
          expect(mailInput).toContainHTML('john.dee@someemail.com');
          expect(passwordInput).toContainHTML('111111');
         }) ; 
        
    });

})

