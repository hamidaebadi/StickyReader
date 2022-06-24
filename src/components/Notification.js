import React from "react";
const Notification = ({message}) => {
    if(!message){
        return(
            <>
            </>
        )
    }
    
    return(
        <>
        <div>
            <p>
                <strong>Header</strong>
                <p>Body</p>
            </p>
        </div>
        </>
    )
}

export default Notification