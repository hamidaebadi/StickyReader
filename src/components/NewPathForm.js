import React, {useContext, useState} from "react";
import { SharedDataContext } from "../AppSharedContext";
import pathServices from '../services/learningPath'

const NewPathForm = () =>{
    const {dispatch} = useContext(SharedDataContext)
    const initialNewPathFormValues = {
        topic: '',
        category: '',
        description: ''
    }
    const [newPathFormValues, setNewPathFormValues] = useState(initialNewPathFormValues)

    const handleState = (field) => {
        return (event) => {
            setNewPathFormValues({...newPathFormValues, [field]: event.target.value})
        }
    }
    
    const handleNewPath = async(event) => {
        event.preventDefault()
        //send data to server
        const pathObj = {
            topic: newPathFormValues.topic,
            category: newPathFormValues.category,
            description: newPathFormValues.description
        }
        const returnedPathObj = await pathServices.createNewPath(pathObj)
        dispatch({
            type: "ADD_NEW_PATH",
            data: {path: returnedPathObj}
        })

        const msg = "Your path created successfully"
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
        setNewPathFormValues(initialNewPathFormValues)
    }
    return(
        <>
        
            <form onSubmit={handleNewPath}>
                <div className="row mb-3">
                        <input type="text" 
                        className="form-control" 
                        id="inputTopic" 
                        placeholder="Subject" 
                        value={newPathFormValues.topic}
                        onChange={handleState('topic')}
                        />
                </div>
                <div className="row mb-3">
                     <input type="text"
                        className="form-control" 
                        id="inputCategory" 
                        placeholder="Category i.e science, politics, ..."
                        value={newPathFormValues.category}
                        onChange={handleState('category')}/>
                </div>
                <div className="row mb-3">
                        <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        placeholder="Description"
                        onChange={handleState('description')}
                        value={newPathFormValues.description}
                        ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add path</button>
            </form>
        </>
    )
}

export default NewPathForm;