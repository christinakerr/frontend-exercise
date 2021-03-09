import React from 'react'
import Button from "../components/Button"
import Job from "../components/Job";
import { Link } from "react-router-dom"

function Listings(props) {
    
    return (
        <main>
            <h1>Jobs</h1>
            <p>{props.jobs.length} listings</p>
            <Link to="/add"><Button>Add Job</Button></Link>

            <div>Job Title</div>
            <div>Posted</div>
            <div>Sponsorship</div>
            <div>Status</div>
            {
                props.jobs.map(job => {
                    return <Job key={job.key} id={job.key} title={job.title} location={job.location} posted={job.posted} sponsorship={job.sponsorship} status={job.status} />
                })
            }
        </main>
    );
}

export default Listings;