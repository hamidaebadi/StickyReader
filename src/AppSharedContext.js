import React, {useReducer} from "react";

const initialState = {user: null, learningPaths: []}

//reducers
let reducer = (state, action) => {
    switch(action.type){
        case "USER_LOGGED_IN":
            return {...state, user: action.data.user}
        case "USER_LOGGED_OUT":
            window.localStorage.clear()
            return {learningPaths: [], user: null}
        case "ADD_NEW_PATH":
            const pathObj = action.data.path
            return {...state, learningPaths: state.learningPaths.concat(pathObj)}
        case "INIT_ALL_PATHS":
            const allPaths = action.data.initialPaths
            const filterdPaths = allPaths.filter(path => path.user === state.user._id)
            return {...state, learningPaths: filterdPaths}
        default:
            return
    }
}

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