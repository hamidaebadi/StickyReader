import React, { useContext, useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import StickyItem from "../components/StickyItem";
import StickyCreationForm from "../components/StikcyCreationForm";
import SearchBox from "../components/SearchBox";
import stickyServices from '../services/sticky'
import {SharedDataContext} from '../AppSharedContext'
import Message from "../components/Message";
const StickyFeed = () => {
    const [stickies, setStickyList] = useState([])
    const {state} = useContext(SharedDataContext)

    useEffect(() => {
        stickyServices.getUserStickies(state.user.id)
        .then(posts => setStickyList(posts))
    }, [])
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
                <SearchBox />
                {state.noticMessage ? <Message type={state.NoticMessage.type} msg={state.NoticMessage.content} /> : null}
            </div>
        </div>

        <div className="row position-absolute sticky-list-items">
            <div className="col-md-4"></div>
            <div className="col-md-4 stickies-list overflow-scroll p-3">
                {stickies.length === 0 ? <p>NO posts</p> : stickies.map(sticky => <StickyItem key={sticky.title} item={sticky}/>)}
            </div>
            <div className="col-md-4">

            </div>
        </div>
        </>
    )
}

export default StickyFeed;