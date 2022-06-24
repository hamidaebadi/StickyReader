import React from "react";
import Navbar from './components/NavigationBar';
import LoginPage from './LoginPage/index';
import RegisterPage from "./RegisterPage";
import DashboardPage from "./DashboardPage";
import {Route, Routes} from 'react-router-dom'
const App = () => {
  const user = false;

  return (
    <>
    <div className="container-fluid">
        <Navbar user={user}/>
    </div>
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={user ? <DashboardPage />: <LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
      </Routes>

    </div>
    </>
    
  );
}

export default App;
