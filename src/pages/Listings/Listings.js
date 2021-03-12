import React from 'react'
import Job from "../../components/Job/Job";
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
                <Link to="/add" data-testid="add-job-btn" className="btn-primary">Add Job</Link>
            </div>
            <div className="job-grid">
                <div id="title-col-head" className="col-head">Job Title</div>
                <div className="col-head center job-item-mobile">Posted</div>
                <div className="col-head center job-item-mobile">Sponsorship</div>
                <div className="col-head center job-item-mobile">Status</div>
                <div className="col-head"></div>
            </div>
            <div>
                {
                    jobMap ? jobMap : <h4>No jobs found.</h4>
                }
            </div>

        </main>
    );
}

export default Listings;