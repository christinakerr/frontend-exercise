import React from 'react'
import Job from "../../components/Job";
import { Link } from "react-router-dom"
import "./Listings.css"

function Listings(props) {
    let jobCount = 0;
    let jobMap;

    if (props.jobs) {
        jobCount = props.jobs.length
        jobMap = props.jobs.map(job => {
            return <Job key={job.key} id={job.key} title={job.title} location={job.location} posted={job.posted} sponsorship={job.sponsorship} status={job.status} />
        })
    }

    return (
        <main data-testid="jobs-page">
            <div className="listings-title">
                <div>
                <h1>Jobs</h1>
                <p>{jobCount} listings</p>
                </div>
                <Link to="/add" data-testid="add-job-btn"><button className="btn-primary">Add Job</button></Link>
            </div>
            <div>Job Title</div>
            <div>Posted</div>
            <div>Sponsorship</div>
            <div>Status</div>
            <div>
                {
                    jobMap ? jobMap : <h4>No jobs found.</h4>
                }
            </div>
        </main>
    );
}

export default Listings;