import {FormModal} from './Modal'
import {render, screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

describe('Modal component', () => {
    it('Modal renders', () => {
        render (
        <MemoryRouter>
        <FormModal open={true} setOpen/>
        </MemoryRouter>)
        const modalBox = screen.getByTestId('modal-box');

        expect(modalBox).toBeInTheDocument();
    });
})