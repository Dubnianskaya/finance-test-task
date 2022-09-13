import { screen } from '@testing-library/react';
import { FavoritesList } from './FavoritesList';
import { renderWithRedux } from '../../tests/helpers/renderWithRedux';


describe('FavoriteList component', () => {

    it('FavoriteList renders without data', () => {
        renderWithRedux(<FavoritesList/>)

        expect(screen.queryByRole('list')).toBeNull();
    });

})