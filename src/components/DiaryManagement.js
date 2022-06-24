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
        <button type="button" class="btn btn-sm btn-secondary g-3" data-bs-toggle="modal"
         data-bs-target="#staticBackdrop">Create new learning path</button>
       </div>
       
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <NewPathForm />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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