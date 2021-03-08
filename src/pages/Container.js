import React, { useState } from 'react';
import Listings from "./Listings";
import AddEdit from "./AddEdit";
import NotFound from "./NotFound"
import shortid from "shortid"

function Container( props ) {
    const [jobs, setJobs] = useState(
        [
            {
                title: "Product Manager",
                location: "Austin, TX",
                posted: "10/04/2020",
                sponsorship: "Free",
                status: "Open",
                key: shortid.generate()
            },
            {
                title: "CEO",
                location: "Austin, TX",
                posted: "12/30/2020",
                sponsorship: "Sponsored",
                status: "Paused",
                key: shortid.generate()
            },
            {
                title: "Software Engineer",
                location: "Seattle, WA",
                posted: "11/18/2020",
                sponsorship: "Free",
                status: "Closed",
                key: shortid.generate()
            }
        ]
    )

    function addJob(job){
        setJobs(jobs.concat(job));
        console.log(jobs);
        props.history.push("/")
    }

    const url = props.location.pathname;

    if (url === "/"){
        return <Listings jobs={ jobs }/>
    } else if (url === "/add" || url === "/edit"){
        return <AddEdit addJob={addJob}/>
    } else {
        return <NotFound />
    }
}

export default Container;




