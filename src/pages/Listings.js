import React from 'react'
import Button from "../components/Button"
import Job from "../components/Job";

function Listings() {
    return (
        <main>
            <h1>Jobs</h1>
            <p>3 listings</p>
            <Button>Add Job</Button>

            <div>Job Title</div>
            <div>Posted</div>
            <div>Sponsorship</div>
            <div>Status</div>
            
            <Job title="Product Manager" location="Austin, TX" posted="10/04/2020" sponsorship="free" status="open"/>
        </main>
    );
}

export default Listings;