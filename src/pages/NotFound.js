import React from 'react'
import Button from "../components/Button"
import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <Link to="/"><Button>Return to Listings</Button></Link>
        </div>
    );
}

export default NotFound;
