import { getByTestId } from '@testing-library/react'
import Listings from '../pages/Listings'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

test('<Listings />', () => {
    const { getByTestId } = render(<MemoryRouter><Listings /></MemoryRouter>);
    expect(getByTestId('jobs-page')).toBeTruthy();
})