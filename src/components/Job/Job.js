import React from 'react'
import { Link } from "react-router-dom"
import "./Job.css"

function Job(props) {

    return (
        <div data-testid="job" className="job-row job-grid">
            <div className="job-title-col">
                <div className="job-item">{props.title}</div>
                <div className="job-location">{props.location}</div>
            </div>
            <div className="center job-item">{props.posted}</div>
            <div className="center job-item">{props.sponsorship}</div>
            <div className="center job-item">{props.status}</div>
            <Link to={"/edit/" + props.id} data-testid="edit-job-btn" className="right"><button className="btn-secondary">Edit</button></Link>
        </div>
    );
}

export default Job;
