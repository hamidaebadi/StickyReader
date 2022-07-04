import React, { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import Message from '../components/Message';
import {Link} from 'react-router-dom';
import { SharedDataContext } from '../AppSharedContext';

const LoginPage = () => {
  const {state} = useContext(SharedDataContext)

    return(
        <>
        <div className="row">
        <div className="col-md-4 p-3 "></div>
        <div className="col-md-4 p-3 ">
        <h3 className="p-3">Login</h3>
        {state.NoticMessage ? <Message type={state.NoticMessage.type} msg={state.NoticMessage.content}/> : null}
          <LoginForm />
          <p><strong>Dont have an account?</strong></p>
          <Link to="/register">
          create a new one here
          </Link>
         
        </div>
        <div className="col-md-4 p-3"></div>
      </div>
        </>
    )
}

export default LoginPage;