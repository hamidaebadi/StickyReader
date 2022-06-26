import React from "react";

const NewPathForm = () =>{
    return(
        <>
            <form>
                <div className="row mb-3">
                    <label htmlFor="inputTopic" className="col-sm-2 col-form-label">Topic</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputTopic" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputCategory" className="form-label">Category</label>
                    <select id="inputCategory" className="form-select">
                        <option selected>Choose...</option>
                        <option>Computer Science</option>
                        <option>Politics</option>
                        <option>Religion</option>
                    </select>
                </div>
                <div className="row ">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add path</button>
            </form>
        </>
    )
}

export default NewPathForm;