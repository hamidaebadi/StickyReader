import React, { useContext, useEffect }  from "react";
import {Link} from 'react-router-dom'
import { SharedDataContext } from "../AppSharedContext";
import pathServices from '../services/learningPath'

const PathsList = () => {
    const {state, dispatch} =  useContext(SharedDataContext)
    useEffect(()=>{
        pathServices.getAllPaths()
      .then(paths => dispatch({
        type: "INIT_ALL_PATHS",
        data: {initialPaths: paths}
      }))
    }, [])
    if(state.learningPaths.length === 0){
        return(
            <>
            <p>
                <strong>No Active learning path</strong>
            </p>
            </>
        )
    }

    return(
        <>
        {state.learningPaths.map((path) =>  <div className="row g-1"  key={path.topic}>
            <Link to="/diaries"><strong>{path.topic}</strong></Link>
            </div>)}
        </>
    )
}

export default PathsList;