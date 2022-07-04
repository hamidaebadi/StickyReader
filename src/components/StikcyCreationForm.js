import React, {useContext, useState} from "react";
import { SharedDataContext } from "../AppSharedContext";
import stickyServices from '../services/sticky'

const StickyCreationForm = () => {
    const {state} = useContext(SharedDataContext)
    const [stickyContent, setStickyContent] = useState('')
    const [path, setPath] = useState('')
    const handleStickyForm = async(event) => {
        event.preventDefault()
        const newStickyObj = {
            content: stickyContent,
            pathTopic: path,
            id: state.user.id
        }

        try{
            const returnedSticky = await stickyServices.createSticky(newStickyObj)
            setStickyContent('')
            setPath('')
        }catch(exception){
            console.log("Error in creation form handling")
        }
    }
    if(state.learningPaths.length === 0){
        return(
            <div className="card text-dark bg-light mb-3">
                <div className="card-header bg-warning">Notice</div>
                <div className="card-body">
                    <h5 className="card-title">You have 0 reading path</h5>
                    <p className="card-text">
                        To add new stickies you have to first create a Reading path
                        
                    </p>
                </div>
            </div>
        )
    }

    return(
        <>
            <form onSubmit={handleStickyForm}>
                <div className="mb-1">
                    <textarea className="form-control" rows="5"
                    placeholder="write your sticky here..."
                    value={stickyContent}
                    onChange={(event) => setStickyContent(event.target.value)}
                    required></textarea>
                </div>
                <select className="form-select mb-1 form-select-sm" onChange={(e) => setPath(e.target.value)}>
                    <option value={path}>Select a topic </option>
                    {state.learningPaths.map(path => <option value={path.topic}>{path.topic}</option>)}
                </select>
                <button type="submit" className="btn btn-primary btn-sm">Share</button>
            </form>
        </>
    )
}

export default StickyCreationForm;