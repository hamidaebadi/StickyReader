import React, { useContext } from "react";
import {useState} from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import userServices from '../services/user';
import Message from './Message';
import {SharedDataContext} from '../AppSharedContext'
const RegisterForm = () => {
    const {state, dispatch} = useContext(SharedDataContext)
    const navigate = useNavigate()
    const initalRegisterFormValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [registerFormValues, setRegisterFormValue] = useState(initalRegisterFormValues)
    const handleRegisterForm = async (event) => {
        event.preventDefault()
        if(registerFormValues.password !== registerFormValues.confirmPassword){
            dispatch({
                type: "SET_NOTIC_MESSAGE",
                data: {type: "WARNING", content: "PASSWORDS Don't match eachother"}
            })

            setRegisterFormValue({...registerFormValues, password: '', confirmPassword: ''})
            return
        }

        try{
            const userObj = {...registerFormValues}
            await userServices.createUser(userObj)

            setRegisterFormValue(initalRegisterFormValues)
            dispatch({
                type: "SET_NOTIC_MESSAGE",
                data: {type: "SUCCESS", content: "Your Account has been created! Now you  can log in"}
            })
            setTimeout(()=>{
                dispatch({
                    type: "SET_NOTIC_MESSAGE",
                    data: {type: null, content: null}
                })
            }, 5000)
            navigate('/login')
        }catch(error){
            const errorMessage = error.response.data.error
            dispatch({
                type: "SET_NOTIC_MESSAGE",
                data: {type: "WARNING", content: errorMessage}
            })

        }
        
    }
    const handleInputValue = (field) => {
        return (event) => {
            setRegisterFormValue({...registerFormValues, [field]: event.target.value})
        }
    }

    return (
        <>
        <div className="row">
            <h3>New Account</h3>
            <Message type={state.NoticMessage.type} msg={state.NoticMessage.content}/>
        </div>
        <form onSubmit={handleRegisterForm}>
            <div className="row g-3 p-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name"
                    onChange={handleInputValue('firstName')} value={registerFormValues.firstName} required/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"
                    onChange={handleInputValue('lastName')} value={registerFormValues.lastName} required/>
                </div>
            </div>
            <div className="row p-3 p-3">
                <div className="col">
                    <input type="email" className="form-control" placeholder="email" aria-label="email"
                    onChange={handleInputValue('email')} value={registerFormValues.email} required/>
                </div>
            </div>
            <div className="row p-3">
                <div className="col">
                    <input type="password" className="form-control" placeholder="password" aria-label="password"
                    onChange={handleInputValue('password')} value={registerFormValues.password} required/>
                </div>
                <div className="col">
                    <input type="password" className="form-control" placeholder="confirm password" aria-label="confirmPassword"
                    onChange={handleInputValue('confirmPassword')} value={registerFormValues.confirmPassword} required/>
                </div>
            </div>
            <div className="row p-3">
                <button type="submit" className="btn btn-primary p-3">create account</button>
            </div>
           <Link to="/login"> Back to Login </Link>
        </form>
            
        </>
    )
}
export default RegisterForm;