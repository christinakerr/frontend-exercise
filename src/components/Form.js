import React from 'react'
import Button from "./Button"
import {Link} from "react-router-dom"

function Form(props) {
    return (
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
            <Link to="/"><input type="submit" value="Submit" onClick={props.submitJob}></input></Link>
            <Link to="/"><Button>Cancel</Button></Link>
        </form>
    );
}

export default Form;
