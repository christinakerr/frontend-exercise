import jobList from "./jobList.json"
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import App from "../App"
import Form from "../components/Form/Form"

const history = createMemoryHistory();

const nestedJobList = {
    jobs: jobList
}


test("<AddEdit /> renders heading for /edit page", () => {
    const { getByTestId, getAllByTestId} = render(<Router history={history}><App jobs={nestedJobList} /></Router>);
    userEvent.click(getAllByTestId("edit-job-btn")[0])
    expect(getByTestId("add-edit-heading").textContent).toBe("Edit job")
    
})

test("<AddEdit /> form contains existing job values", () => {
    const { getByTestId,} = render(<Router history={history}><Form 
        titleValue={{defaultValue: jobList[0].title}} 
        locationValue={{defaultValue: jobList[0].location}}
        sponsorshipValue={{defaultValue: jobList[0].sponsorship}}
        statusValue={{defaultValue: jobList[0].status}}
        /></Router>);
    expect(getByTestId("input-title").value).toBe(jobList[0].title);
    expect(getByTestId("input-location").value).toBe(jobList[0].location);
    expect(getByTestId("input-sponsorship").value).toBe(jobList[0].sponsorship);
    expect(getByTestId("input-status").value).toBe(jobList[0].status);
})