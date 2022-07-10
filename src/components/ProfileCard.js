import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SharedDataContext } from "../AppSharedContext";
import {useQuery} from '@apollo/client'
import {GET_FOLLOWER_AMOUNT, GET_FOLLOWING_AMOUNT} from '../queries'

const ProfileCard = () =>{
    const {state} = useContext(SharedDataContext)
    const followerAmountResult = useQuery(GET_FOLLOWER_AMOUNT, {variables: {userId: state.user.id}})
    const followingAmountResult = useQuery(GET_FOLLOWING_AMOUNT, {variables: {userId: state.user.id}})


    return(
        <>
            <div className="card profile-card p-4">
                <div className="row">
                    <div className="col-md-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        <h6 className="card-title">{state.user.firstName} {state.user.lastName}</h6>
                    </div>
                    <div className="col-md-3">
                        Following {followingAmountResult.loading ? <p>Undefined</p> : followingAmountResult.data.getFollowingAmount}
                    </div>
                    <div className="col-md-3">
                        Follower {followerAmountResult.loading ? <p>Undefined</p> : followerAmountResult.data.getFollowerAmount}
                    </div>
                </div>
                <div className="card-text">
                   {state.user.bio ? state.user.bio : <p className="bg-warning">Update your bio</p>}
                </div>

                <div className="card-body">
                    <Link to="/profile/update">Update Bio</Link>
                </div>
                
            </div>
        </>
    )
}

export default ProfileCard;