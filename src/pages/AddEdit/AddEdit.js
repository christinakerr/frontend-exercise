import React from 'react'
import { useLocation } from "react-router-dom"
import shortid from 'shortid'
import Form from "../../components/Form/Form"
import "./AddEdit.css"

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
    let submitValue = "Add job"
    let jobToEdit;

    if (isEditPage) {
        submitValue = "Save";
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
        console.log("Content: ")
        console.log(content)
        if (!content.title.value.trim() || !content.location.value.trim()) {
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
        return month + "/" + date + "/" + today.getFullYear()
    }


    return (
        <main>
            <div className="add-edit-container">
                {
                    isEditPage ?
                        <div>
                            <h1 data-testid="add-edit-heading">Edit job</h1>
                            <h2>Edit the information for your job listing.</h2>
                        </div>
                        :
                        <div>
                            <h1 data-testid="add-edit-heading">Add a new job</h1>
                            <h2>Fill out the information for your new job listing.</h2>
                        </div>
                }
                <hr className="hr" />
                <div>
                    <Form jobs={props.jobs} isEditPage={isEditPage} submitJob={submitJob} titleValue={titleValue} locationValue={locationValue} sponsorshipValue={sponsorshipValue} statusValue={statusValue} submitValue={submitValue} />
                </div>
            </div>
        </main>
    );
}

export default AddEdit;