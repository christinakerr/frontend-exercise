import jobList from "./jobList.json"
import '@testing-library/jest-dom';
import AddEdit from "../pages/AddEdit";
import { renderHook, act } from '@testing-library/react-hooks'

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "/add"
    })
}));

test("submitJob", () => {
    const { result } = renderHook(() => AddEdit(jobList));
    // console.log(result.current);
    // act(() => {
    //     result.current.submitJob({
    //         target: {
    //             elements: {
    //                 title: {
    //                     value: "Job"
    //                 },
    //                 location: {
    //                     value: "Location"
    //                 },
    //                 sponsorship: {
    //                     value: "Free"
    //                 },
    //                 status: {
    //                     value: "Closed"
    //                 }
    //             }
    //         }
    //     })
    // })
    
})