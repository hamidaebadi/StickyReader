import React from "react";

const Message = ({type, msg}) =>{
    switch(type){
        case "WARNING":
            return <><div className="alert alert-danger" role="alert">{msg}</div></>
        case "SUCCESS":
            return <><div className="alert alert-success" role="alert">{msg}</div> </>
        case "INFO":
            return <><div className="alert alert-info" role="alert">{msg}</div></>
        default:
            break
    }
}

export default Message;