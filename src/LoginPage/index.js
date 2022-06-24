import React from 'react';
import LoginForm from '../components/LoginForm';
import {Link} from 'react-router-dom';
const LoginPage = () => {
    return(
        <>
        <div className="row">
        <div className="col p-3 "></div>
        <div className="col p-3 ">
        <h3 className="p-3">Login</h3>
          <LoginForm />
          <p><strong>Dont have an account?</strong></p>
          <Link to="/register">
          create a new one here
          </Link>
         
        </div>
        <div className="col p-3">
        </div>
      </div>
        </>
    )
}

export default LoginPage;