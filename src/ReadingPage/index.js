import React, { useContext, useEffect }  from "react";
import { SharedDataContext } from "../AppSharedContext";
import pathServices from '../services/learningPath'
import NewPathForm from "../components/NewPathForm";
import ReadingPathItem from "../components/ReadingPathItem";

const ReadingPage = () => {
    const {state, dispatch} =  useContext(SharedDataContext)
    useEffect(()=>{
        pathServices.getAllPaths()
      .then(paths => dispatch({
        type: "INIT_ALL_PATHS",
        data: {initialPaths: paths}
      }))
    }, [])

    return(
        <>
        <div className="container">
                <div className="row p-4 g-4 fixed-top position-static">
                    <div className="col"></div>
                    <div className="col-md-4">
                        <div className="row p-4">
                            <button type="button" className="btn btn-sm btn-primary g-3 " data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">Create new learning path</button>
                        </div>

                        <div className="modal fade" id="staticBackdrop" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <NewPathForm />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>

                <div className="row row-cols-1 row-cols-md-4 p-4 gap-3 overflow-auto">
                {state.learningPaths.map((path) => <ReadingPathItem key={path.topic} readingItem={path}/>)}
                </div>
            </div>

        </>
    )   
}

export default ReadingPage