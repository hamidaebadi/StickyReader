import React from "react";
import NewPathForm from "./NewPathForm";
import PathItem from "./PathItem";

const DiaryManagement = () => {
    return(
        <>
        <div className="row position-relative top-50 start-50 translate-middle-x">
            <strong className="text-center">Your learning paths</strong>
        </div>
       <div className="row position-relative top-50 start-50 translate-middle-x">
        <button type="button" className="btn btn-sm btn-secondary g-3" data-bs-toggle="modal"
         data-bs-target="#staticBackdrop">Create new learning path</button>
       </div>
       
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
        
        <div className="row position-relative top-50 start-50 translate-middle-x">
        <PathItem />
        </div>
        
        </>
    )
}

export default DiaryManagement;