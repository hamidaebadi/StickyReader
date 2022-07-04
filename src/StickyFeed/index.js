import React from "react";
import ProfileCard from "../components/ProfileCard";
import StickyItem from "../components/StickyItem";
import StickyCreationForm from "../components/StikcyCreationForm";
import UserSugesstionCard from "../components/UserSugesstionCard";

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
            <div className="col-md-4">
                <ProfileCard />
            </div>
            <div className="col-md-4">
                <StickyCreationForm />
            </div>
            <div className="col-md-4">
                <UserSugesstionCard />
            </div>
        </div>

        <div className="row position-absolute sticky-list-items">
            <div className="col-md-4"></div>
            <div className="col-md-4 stickies-list overflow-scroll p-3">
                {stickies.map(sticky => <StickyItem key={sticky.title} />)}
            </div>
            <div className="col-md-4">

            </div>
        </div>
        </>
    )
}

export default StickyFeed;