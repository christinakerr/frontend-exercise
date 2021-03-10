import jobList from "./jobList.json"
import { render, wrapper } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import App from "../App"
import Form from "../components/Form"
import AddEdit from "../pages/AddEdit"

const history = createMemoryHistory();

const nestedJobList = {
    jobs: jobList
}


test("<AddEdit /> renders heading for /edit page", () => {
    const { getByTestId, getAllByTestId} = render(<Router history={history}><App jobs={nestedJobList} /></Router>);
    userEvent.click(getAllByTestId("edit-job-btn")[0])
    expect(getByTestId("add-edit-heading").textContent).toBe("Edit job")
    
})

// test("<AddEdit /> form contains existing job values", () => {
//     const { getByTestId, debug } = render(<Router history={history}><Form jobs={nestedJobList}/></Router>);
//     expect(getByTestId("input-title").value).toBe(jobList[0].title);
//     expect(getByTestId("input-location").value).toBe(jobList[0].location);
// })