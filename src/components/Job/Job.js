import React from 'react'
import { Link } from "react-router-dom"
import "./Job.css"

function Job(props) {

    return (
        <div data-testid="job" className="job-row job-grid">
            <div className="job-title-col">
                <div>{props.title}</div>
                <div>{props.location}</div>
            </div>
            <div className="center">{props.posted}</div>
            <div className="center">{props.sponsorship}</div>
            <div className="center">{props.status}</div>
            <Link to={"/edit/" + props.id} data-testid="edit-job-btn" className="right"><button className="btn-secondary">Edit</button></Link>
        </div>
    );
}

export default Job;
