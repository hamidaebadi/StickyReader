import React from "react";
import {Link} from 'react-router-dom'
const PathItem = () => {
    return(
        <>
        <div className="row g-1">
        <Link to="/diaries">
            <strong>Learn Java programming</strong>
        </Link>
        </div>
        
        </>
    )
}

export default PathItem;