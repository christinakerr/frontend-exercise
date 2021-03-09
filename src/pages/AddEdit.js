import React from 'react'
import { useLocation } from "react-router-dom"
import shortid from 'shortid'
import Form from "../components/Form"

function AddEdit(props) {

    const url = useLocation()
    let isEditPage = true;
    if (url.pathname === "/add") {
        isEditPage = false;
    }

    function submitJob(event) {
        event.preventDefault();
        const content = event.target.form;
        const jobObject = {
            title: content.title.value,
            location: content.location.value,
            posted: todaysDate(),
            sponsorship: content.sponsorship.value,
            status: content.status.value,
            key: shortid.generate()
        }
        return props.addJob(jobObject)
    }

    function todaysDate() {
        const today = new Date();
        let date = today.getDate();
        if (today.getDate() < 10) {
            date = "0" + today.getDate()
        }
        let month = today.getMonth() + 1;
        if (month < 10) {
            month = "0" + (today.getMonth() + 1)
        }
        return month + "-" + date + "-" + today.getFullYear()
    }


    return (
        <main>
            {
                isEditPage ?
                    <div>
                        <h2>Edit job</h2>
                        <h3>Edit the information for your job listing.</h3>
                    </div>
                    :
                    <div>
                        <h2>Add a new job</h2>
                        <h3>Fill out the information for your new job listing.</h3>
                    </div>
            }
            <div>
                <Form jobs={props.jobs} isEditPage={isEditPage} submitJob={submitJob}/>
            </div>
        </main>
    );
}

export default AddEdit;