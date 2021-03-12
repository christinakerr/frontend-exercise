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
            <div className="center job-item job-item-mobile"><span className="mobile-only">Posted: </span>{props.posted}</div>
            <div className="center job-item job-item-mobile"><span className="mobile-only">Sponsorship: </span>{props.sponsorship}</div>
            <div className="center job-item job-item-mobile"><span className="mobile-only">Status: </span>{props.status}</div>
            <Link to={"/edit/" + props.id} data-testid="edit-job-btn" className="right edit-btn-mobile btn-secondary">Edit</Link>
        </div>
    );
}

export default Job;
