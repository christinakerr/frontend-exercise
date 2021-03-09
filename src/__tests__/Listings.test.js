import { getByTestId } from '@testing-library/react'
import Listings from '../pages/Listings';
import Job from "../components/Job"
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

const jobList = [
    {
        key: "1",
        location: "Austin, TX",
        posted: "10/04/2020",
        sponsorship: "Free",
        status: "Open",
        title: "Product Manager"
    }
]

test('<Listings /> renders', () => {
    const { getByTestId } = render(<MemoryRouter><Listings /></MemoryRouter>);
    expect(getByTestId('jobs-page')).toBeTruthy();
})

test('<Listings /> displays correct number of jobs', () => {
    const {  getAllByTestId } = render(<MemoryRouter><Listings jobs={jobList}/></MemoryRouter>)
    expect(getAllByTestId("job").length).toEqual(jobList.length);
})