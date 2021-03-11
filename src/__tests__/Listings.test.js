import jobList from "./jobList.json"
import Listings from '../pages/Listings/Listings';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup)


test('<Listings /> renders', () => {
    const { getByTestId } = render(<MemoryRouter><Listings /></MemoryRouter>);
    expect(getByTestId('jobs-page')).toBeTruthy();
})

test('<Listings /> displays correct number of jobs', () => {
    const {  getAllByTestId } = render(<MemoryRouter><Listings jobs={jobList}/></MemoryRouter>)
    expect(getAllByTestId("job").length).toEqual(jobList.length);
})