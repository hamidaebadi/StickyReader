import React from "react";
import {Link} from 'react-router-dom'

const HomePage = () => {
    return(
        <>
        <div className="d-flex cover-page justify-content-center">
            <div className="d-flex align-items-center">
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