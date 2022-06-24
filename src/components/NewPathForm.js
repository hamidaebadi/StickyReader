import React from "react";

const NewPathForm = () =>{
    return(
        <>
            <form>
                <div class="row mb-3">
                    <label for="inputTopic" class="col-sm-2 col-form-label">Topic</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputTopic" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputCategory" class="form-label">Category</label>
                    <select id="inputCategory" class="form-select">
                        <option selected>Choose...</option>
                        <option>Computer Science</option>
                        <option>Politics</option>
                        <option>Religion</option>
                    </select>
                </div>
                <div className="row ">
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Add path</button>
            </form>
        </>
    )
}

export default NewPathForm;