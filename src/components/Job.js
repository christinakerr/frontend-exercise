import React from 'react'
import Button from "./Button"
import { Link } from "react-router-dom"

function Job(props) {

    return (
        <div>
            <div>{props.title}</div>
            <div>{props.location}</div>
            <div>{props.posted}</div>
            <div>{props.sponsorship}</div>
            <div>{props.status}</div>
            <Link to={"/edit/" + props.id}><Button>Edit</Button></Link>
        </div>
    );
}

export default Job;
