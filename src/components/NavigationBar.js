import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {SharedDataContext} from '../AppSharedContext'
const NavBar = ({ user }) => {
    const {dispatch} = useContext(SharedDataContext)

    const logout = () => {
        dispatch({
            type: "USER_LOGGED_OUT"
        })

    }
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Learning Diary</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/profile" className="nav-link ms-5"> Profile</Link>
                            <button className="btn btn-sm btn-light ms-5" onClick={logout}> Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;