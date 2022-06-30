import React, { useContext, useEffect } from "react";
import Navbar from './components/NavigationBar';
import LoginPage from './LoginPage/index';
import RegisterPage from "./RegisterPage";
import StickyFeed from "./StickyFeed";
import Profile from "./ProfilePage";
import {Navigate, Route, Routes} from 'react-router-dom'
import { SharedDataContext } from "./AppSharedContext";
import pathServices from './services/learningPath'
import ReadingPage from "./ReadingPage";

const App = () => {
  const {state, dispatch} = useContext(SharedDataContext)
  const user = state.user;

  //check if user is already logged in
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedDiaryLearnerAppUser')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      dispatch({
        type: "USER_LOGGED_IN",
        data: {user}
      })
      pathServices.setToken(user.token)
      
    }
  }, [])

  return (
    <>
    <div className="container-fluid">
      <div className="row p-3">
        <Navbar user={user}/>
      </div>
        
    </div>
    <div className="container-fluid">
      <Routes>
          <Route path="/" element={user ? <StickyFeed />: <LoginPage />}/>
          <Route path="/reading-paths" element={user ? <ReadingPage /> : <Navigate replace to="/login" />}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/profile" element={user ? <Profile /> : <Navigate replace to="/"/>}/>
          <Route path="/login" element={<LoginPage />}/>
      </Routes>

    </div>
    </>
    
  );
}

export default App;
