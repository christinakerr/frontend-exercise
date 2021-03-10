import jobList from "./jobList.json"
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import App from "../App"

const history = createMemoryHistory();

const nestedJobList = {
    jobs: jobList
}

test("<AddEdit /> renders heading for /edit page", () => {
    const { getByTestId, getAllByTestId} = render(<Router history={history}><App jobs={nestedJobList} /></Router>);
    userEvent.click(getAllByTestId("edit-job-btn")[0])
    expect(getByTestId("add-edit-heading").textContent).toBe("Edit job")
})