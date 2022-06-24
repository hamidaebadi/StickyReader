import React from "react";
import DiaryManagement from "../components/DiaryManagement";
import Activities from "../components/Activities";
import DiaryView from "../components/DiaryView";
const DashboardPage = () => {
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3 p-3">
                        <DiaryManagement />
                    </div>
                    <div className="col-6 p-3 border-end border-start">
                        <DiaryView />
                    </div>
                    <div className="col-3 p-3">
                        <Activities />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage;