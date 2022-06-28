import React, { useContext, useEffect } from "react";
import Navbar from './components/NavigationBar';
import LoginPage from './LoginPage/index';
import RegisterPage from "./RegisterPage";
import DashboardPage from "./DashboardPage";
import Profile from "./ProfilePage";
import {Route, Routes, Navigate} from 'react-router-dom'
import { SharedDataContext } from "./AppSharedContext";
import pathServices from './services/learningPath'
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
        <Navbar user={user}/>
    </div>
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={user ? <DashboardPage />: <LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/profile" element={user ? <Profile /> : <Navigate replace to="/"/>}/>
      </Routes>

    </div>
    </>
    
  );
}

export default App;
