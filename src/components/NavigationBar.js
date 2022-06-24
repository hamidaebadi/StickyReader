import React from "react";
import { Link } from "react-router-dom";
const NavBar = ({ user }) => {
    if (!user) {
        return (
            <>
                <nav className="navbar  navbar-expand-lg navbar-dark bg-dark bg-gradient">
                    <div className="container">
                        <span className="navbar-brand mb-0 h1">DiaryLearning</span>
                    </div>
                </nav>
            </>
        )
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <Link to="/" className="navbar-brand">Learning Diary</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/settings" className="nav-link ms-5"> Settings</Link>
                            <Link to="/logout" className="nav-link ms-5"> Logout</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;