import React from 'react'
import { Link } from "react-router-dom"
import "./Form.css"

function Form(props) {

    return (
        <form onSubmit={props.submitJob} data-testid="form">
            <label htmlFor="title">
                <h4>Job Title</h4>
                <p>What is the name of the role?</p>
            </label>
            <input data-testid="input-title" type="text" id="title" name="title" placeholder="e.g. Software Engineer" {...props.titleValue}></input>
            <label htmlFor="location">
                <h4>Location</h4>
                <p>Where is this job?</p>
            </label>
            <input data-testid="input-location" type="text" id="location" name="location" placeholder="e.g. Chicago, IL" {...props.locationValue}></input>
            <label htmlFor="sponsorship">
                <h4>Sponsorship</h4>
                <p>Do you want to promote this job?</p>
            </label>
            <select data-testid="input-sponsorship" id="sponsorship" name="sponsorship" {...props.sponsorshipValue}>
                <option value="Free">Free</option>
                <option data-testid="opt-spon" value="Sponsored">Sponsored</option>
            </select>
            <label htmlFor="status">
                <h4>Status</h4>
                <p>Are you ready to make this job listing public?</p>
            </label>
            <select data-testid="input-status" id="status" name="status" {...props.statusValue}>
                <option value="Open">Open</option>
                <option data-testid="opt-paused" value="Paused">Paused</option>
                <option value="Closed">Closed</option>
            </select>
            <hr className="hr" />
            <div className="btn-row">
                <Link to="/" data-testid="cancel-btn" className="btn-secondary form-btn">Cancel</Link>
                <input type="submit" value={props.submitValue} className="btn-primary form-btn" data-testid="submit-btn"></input>
            </div>
        </form>
    );
}

export default Form;
