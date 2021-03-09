import React from 'react'
import Button from "./Button"
import {Link, useLocation } from "react-router-dom"

function Form(props) {

    let url = useLocation();
    let titleValue;
    let locationValue;
    let sponsorshipValue;
    let statusValue;

    if (props.isEditPage){
        let newUrl = url.pathname.replace("/edit/", "");
        let jobToEdit;
        for (let i in props.jobs){

            if (props.jobs[i].key === newUrl){
                jobToEdit = props.jobs[i];
                break;
            }
        }
        console.log(jobToEdit);
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

    return (
        <form>
            <label htmlFor="title">
                <h4>Job Title</h4>
                <p>What is the name of the role?</p>
            </label>
            <input type="text" id="title" name="title" placeholder="e.g. Software Engineer" {...titleValue}></input>
            <label htmlFor="location">
                <h4>Location</h4>
                <p>Where is this job?</p>
            </label>
            <input type="text" id="location" name="location" placeholder="e.g. Chicago, IL" {...locationValue}></input>
            <label htmlFor="sponsorship">
                <h4>Sponsorship</h4>
                <p>Do you want to promote this job?</p>
            </label>
            <select id="sponsorship" name="sponsorship" {...sponsorshipValue}>
                <option value="Free">Free</option>
                <option value="Sponsored">Sponsored</option>
            </select>
            <label htmlFor="status">
                <h4>Status</h4>
                <p>Are you ready to make this job listing public?</p>
            </label>
            <select id="status" name="status" {...statusValue}>
                <option value="Open">Open</option>
                <option value="Paused">Paused</option>
                <option value="Closed">Closed</option>
            </select>
            <br />
            <Link to="/"><input type="submit" value="Submit" onClick={props.submitJob}></input></Link>
            <Link to="/"><Button>Cancel</Button></Link>
        </form>
    );
}

export default Form;
