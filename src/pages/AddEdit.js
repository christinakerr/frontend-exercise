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
    let titleValue;
    let locationValue;
    let sponsorshipValue;
    let statusValue;
    let jobToEdit;

    if (isEditPage) {
        let newUrl = url.pathname.replace("/edit/", "");
        
        for (let i in props.jobs) {
            if (props.jobs[i].key === newUrl) {
                jobToEdit = props.jobs[i];
                break;
            }
        }

        titleValue = {
            defaultValue: jobToEdit.title
        }
        locationValue = {
            defaultValue: jobToEdit.location
        }
        sponsorshipValue = {
            defaultValue: jobToEdit.sponsorship
        }
        statusValue = {
            defaultValue: jobToEdit.status
        }
    }


    function submitJob(event) {
        event.preventDefault();
        const content = event.target.elements;
        if (!content.title.value.trim() || !content.location.value.trim()){
            alert("Please fill in all fields.")
            return;
        }
        if (!isEditPage) {
            const jobObject = {
                title: content.title.value,
                location: content.location.value,
                posted: todaysDate(),
                sponsorship: content.sponsorship.value,
                status: content.status.value,
                key: shortid.generate()
            }
            return props.addJob(jobObject)
        } else {
            const jobObject = {
                title: content.title.value,
                location: content.location.value,
                posted: jobToEdit.posted,
                sponsorship: content.sponsorship.value,
                status: content.status.value,
                key: jobToEdit.key
            }
            return props.updateJob(jobObject, jobToEdit)
        }
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
                        <h2 data-testid="add-edit-heading">Edit job</h2>
                        <h3>Edit the information for your job listing.</h3>
                    </div>
                    :
                    <div>
                        <h2 data-testid="add-edit-heading">Add a new job</h2>
                        <h3>Fill out the information for your new job listing.</h3>
                    </div>
            }
            <div>
                <Form jobs={props.jobs} isEditPage={isEditPage} submitJob={submitJob} titleValue={titleValue} locationValue={locationValue} sponsorshipValue={sponsorshipValue} statusValue={statusValue} />
            </div>
        </main>
    );
}

export default AddEdit;