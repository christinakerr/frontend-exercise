import React from 'react'
import Button from "../components/Button"
import {Link} from "react-router-dom"
import shortid from 'shortid'

function AddEdit(props) {

    function submitJob(event){
        event.preventDefault();
        const content = event.target.form;
        const jobObject = {
            title: content.title.value,
            location: content.location.value,
            posted: getDate(),
            sponsorship: content.sponsorship.value,
            status: content.status.value,
            key: shortid.generate()
        }
        return props.addJob(jobObject)
    }

    function getDate(){
        const today = new Date();
        let date = today.getDate();
        if (today.getDate() < 10){
            date = "0" + today.getDate()
        }
        let month = today.getMonth() + 1;
        if (month < 10){
            month = "0" + (today.getMonth() + 1)
        }
        return month + "-" + date + "-" + today.getFullYear()
    }


    return (
        <main>
            <div>
                <h2>Add a new job</h2>
                <h3>Fill out the information for your new job listing.</h3>
            </div>
            <div>
                <form>
                    <label htmlFor="title">
                        <h4>Job Title</h4>
                        <p>What is the name of the role?</p>
                    </label>
                    <input type="text" id="title" name="title" placeholder="e.g. Software Engineer"></input>
                    <label htmlFor="location">
                        <h4>Location</h4>
                        <p>Where is this job?</p>
                    </label>
                    <input type="text" id="location" name="location" placeholder="e.g. Chicago, IL"></input>
                    <label htmlFor="sponsorship">
                        <h4>Sponsorship</h4>
                        <p>Do you want to promote this job?</p>
                    </label>
                    <select id="sponsorship" name="sponsorship">
                        <option value="Free">Free</option>
                        <option value="Sponsored">Sponsored</option>
                    </select>
                    <label htmlFor="status">
                        <h4>Status</h4>
                        <p>Are you ready to make this job listing public?</p>
                    </label>
                    <select id="status" name="status">
                        <option value="Open">Open</option>
                        <option value="Paused">Paused</option>
                        <option value="Closed">Closed</option>
                    </select>
                    <br />
                    <Link to="/"><input type="submit" value="Submit" onClick={submitJob}></input></Link>
                    <Link to="/"><Button>Cancel</Button></Link>
                </form>
            </div>
        </main>
    );
}

export default AddEdit;