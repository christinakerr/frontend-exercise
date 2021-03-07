import React from 'react'
import Button from "./Button"

function Job(props) {
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.location}</div>
            <div>{props.posted}</div>
            <div>{props.sponsorship}</div>
            <div>{props.status}</div>
            <Button>Edit</Button>
        </div>
    );
}

export default Job;
