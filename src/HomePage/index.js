import React from "react";
import {Link} from 'react-router-dom'

const HomePage = () => {
    return(
        <>
        <div className="d-flex align-items-center">
            <div className="d-flex">
                <p>
                    Welcome to StickyReader
                </p>
                <p>
                    <Link to="/login">
                        <button className="btn btn-secondary">
                            LOGIN
                        </button>
                    </Link>
                </p>
            </div>
            
           
        </div>
        </>
    )
}

export default HomePage;