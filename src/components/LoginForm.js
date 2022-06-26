import React, {useContext, useState} from "react";
import { SharedDataContext } from "../AppSharedContext";
import loginService from '../services/login'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {dispatch} = useContext(SharedDataContext)

    const handleLoginSubmit = async(event) => {
        event.preventDefault()
        const credentials = {email, password}
        const user = await loginService.login(credentials)
        window.localStorage.setItem(
            'loggedDiaryLearnerAppUser',
            JSON.stringify(user)
        )
        dispatch({
            type: "USER_LOGGED_IN",
            data: {user}
        })
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <form onSubmit={handleLoginSubmit}>
                <div className="row mb-3 ">
                    <label htmlFor="inputEmail" className="col-sm-2" col-form-label="true">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail"
                        value={email}
                         onChange={({target}) => setEmail(target.value)}></input>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                        ></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </>
    );
}

export default LoginForm;