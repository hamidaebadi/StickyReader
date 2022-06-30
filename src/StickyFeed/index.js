import React from "react";
import ProfileCard from "../components/ProfileCard";
import StickyItem from "../components/StickyItem";

const StickyFeed = () => {
    const stickies = [{title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"},
    {title: "test", content: "test again"}]
    return(
        <>
        <div className="row sticky-top position-relative mt-4 pt-2">
            <div className="col-sm-12 col-md-4">
                <ProfileCard />
            </div>
            <div className="col-md-4">
                <form>
                <div className="mb-1">
                    <textarea className="form-control" rows="5" placeholder="write your sticky here..." required></textarea>
                </div>
                        <select className="form-select mb-1" aria-label="Default select example">
                            <option selected>Leave my sticiky on </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                <button type="submit" className="btn btn-primary btn-sm">Share</button>
                </form>
               
            </div>
            <div className="col-md-4"></div>
        </div>

        <div className="row position-absolute sticky-list-items">
            <div className="col-md-4"></div>
            <div className="col-md-4 stickies-list overflow-scroll p-3">
                {stickies.map(sticky => <StickyItem key={sticky.title} />)}
            </div>
            <div className="col-md-4"></div>
        </div>
        </>
    )
}

export default StickyFeed;