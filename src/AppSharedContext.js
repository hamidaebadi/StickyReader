import React, {useReducer} from "react";

//reducers
let reducer = (state, action) => {
    switch(action.type){
        case "USER_LOGGED_IN":
            return {...state, user: action.data.user}
        case "USER_LOGGED_OUT":
            window.localStorage.clear()
            return {...state, user: null}
        default:
            return
    }
}

const initialState = {user: null}
const SharedDataContext = React.createContext(initialState)

const AppSharedContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <SharedDataContext.Provider value={{state, dispatch}}>
            {props.children}
        </SharedDataContext.Provider>
    )
}

export {SharedDataContext, AppSharedContextProvider}