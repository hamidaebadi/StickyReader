import React, { useContext } from "react";
import pathServices from '../services/learningPath'
import { SharedDataContext } from "../AppSharedContext";

const ReadingPathItem = ({readingItem}) => {
    const {dispatch} = useContext(SharedDataContext)
    let dataTarget = "#"+readingItem.topic.replace(/\s+/g, '')
    dataTarget = dataTarget.replace(/[.,\/!$%\^&\*;:{}=\-_`~()+?]/g,"")
    let id = readingItem.topic.replace(/\s+/g, '')
    id = id.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()+?]/g,"")

    const handleDeletion = (event) => {
        const pathId = event.target.value
        pathServices.deleteLearningPath(pathId)
        .then(() => {
            dispatch({
                type: "REMOVE_PATH",
                data: {pathId}
            })

            const msg = "Your path removed successfully"
            dispatch({
                type: "SET_NOTIC_MESSAGE",
                data: {type: "SUCCESS", content: msg}
            })

            setTimeout(() => {
                dispatch({
                    type: "SET_NOTIC_MESSAGE",
                    data: {type: null, content: null}
                })
            }, 5000)
        })
        .catch(error => console.log(error))

    }


    return(
        <>
            <div className="card h-100 w-30 path-item-card">
                <div className="card-body path-item-body">
                    <h5 className="card-title path-item-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                        </svg>
                        {readingItem.topic}
                        </h5>
                    <h6 className="card-subtitle mb-2 text-muted">{readingItem.category}</h6>
                    <p className="card-text path-item-description">
                        {readingItem.description}
                    </p>
                    <p className="">
                   
                        <button type="button" class="btn btn-danger btn-sm mx-2" data-bs-toggle="modal" data-bs-target={dataTarget}>
                            Remove
                        </button>

                        <div class="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div className="modal-header">

                                    </div>
                                    <div class="modal-body">
                                        Are you sure to delete <strong className="text-danger">{readingItem.topic} </strong>- learning path?
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Undo</button>
                                        <button type="button" class="btn btn-danger btn-sm mx-2" onClick={handleDeletion}
                                        value={readingItem.id} data-bs-dismiss="modal">
                                            Remove
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <button className="btn btn-info btn-sm mx-2">Edit</button>
                    <button className="btn btn-info btn-sm">Veiw stickies</button>
                    </p>
                   
                    
                </div>
            </div>
        </>
    )
}

export default ReadingPathItem