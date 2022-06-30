import React, { useContext } from "react";
import { SharedDataContext } from "../AppSharedContext";

const ProfileCard = () =>{
    const {state} = useContext(SharedDataContext)

    return(
        <>
            <div className="card profile-card ms-4 p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                                <h6 class="card-title">{state.user.firstName} {state.user.lastName}</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Following x stickyReaders</li>
                                <li class="list-group-item">Followed by x stickyReaders</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
            </div>
        </>
    )
}

export default ProfileCard;