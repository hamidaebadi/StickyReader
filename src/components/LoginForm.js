import React from "react";
import Notification from './Notification';

const LoginForm = () => {
    return (
        <>
            <form>
                <div className="row mb-3 ">
                    <label htmlFor="inputEmail" className="col-sm-2" col-form-label="true">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail"></input>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </>
    );
}

export default LoginForm;