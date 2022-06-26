import React from "react";
import {useState} from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import userServices from '../services/user';

const RegisterForm = () => {
    const navigate = useNavigate()
    const initalRegisterFormValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [registerFormValues, setRegisterFormValue] = useState(initalRegisterFormValues)
    const handleRegisterForm = (event) => {
        event.preventDefault()
        if(registerFormValues.password !== registerFormValues.confirmPassword){
            console.log("Passwords do not match")
            setRegisterFormValue({...registerFormValues, password: '', confirmPassword: ''})
            return
        }
        const userObj = {...registerFormValues}
        userServices.createUser(userObj)
        .then(user => console.log("user created"))
        .catch(error => console.log("error: ", error.message))

        setRegisterFormValue(initalRegisterFormValues)
        navigate('/')
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
           <Link to="/"> Back to Login </Link>
        </form>
            
        </>
    )
}
export default RegisterForm;