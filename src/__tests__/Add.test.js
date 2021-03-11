import jobList from "./jobList.json"
import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import App from "../App"
import Form from "../components/Form/Form"

const submitJob = jest.fn()


const nestedJobList = {
    jobs: jobList
}
const history = createMemoryHistory();

test("<AddEdit /> renders heading for /add page", () => {
    const { getByTestId} = render(<Router history={history}><App jobs={nestedJobList} /></Router>);
    fireEvent.click(getByTestId("add-job-btn"))
    expect(getByTestId("add-edit-heading").textContent).toBe("Add a new job")
})

test("<AddEdit /> job is submitted", async () => {
    const { getByTestId} = render(<Router history={history}><Form submitJob={submitJob}/></Router>);
    userEvent.type(getByTestId("input-title"), jobList[0].title)
    userEvent.type(getByTestId("input-location"), jobList[0].location)
    userEvent.selectOptions(getByTestId("input-sponsorship"), "Sponsored")
    userEvent.selectOptions(getByTestId("input-status"), "Paused")

    expect(getByTestId("input-title").value).toBe("job 1")
    expect(getByTestId("input-location").value).toBe("Location")

    fireEvent.submit(getByTestId("form"))
    expect(submitJob).toBeCalled();

})

