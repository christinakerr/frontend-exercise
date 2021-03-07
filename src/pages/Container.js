import React, { useState } from 'react';
import Listings from "./Listings";
import AddEdit from "./AddEdit";
import NotFound from "./NotFound"

function Container( props ) {
    const [jobs, setJobs] = useState(
        [
            {
                title: "Product Manager",
                location: "Austin, TX",
                posted: "10/04/2020",
                sponsorship: "Free",
                status: "Open"
            },
            {
                title: "CEO",
                location: "Austin, TX",
                posted: "12/30/2020",
                sponsorship: "Sponsored",
                status: "Paused"
            },
            {
                title: "Software Engineer",
                location: "Seattle, WA",
                posted: "11/18/2020",
                sponsorship: "Free",
                status: "Closed"
            }
        ]
    )

    const url = props.location.pathname;

    if (url === "/"){
        return <Listings jobs={ jobs }/>
    } else if (url === "/add" || url === "/edit"){
        return <AddEdit />
    } else {
        return <NotFound />
    }
}

export default Container;




