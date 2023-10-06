import React from 'react';
import '../styling/register.css'
import image from '../images/image1.jpg'
import super1 from '../images/Super.jpg'
import { useState } from "react";

const Form = () => {
    const [Name, setName] = useState("");
    const [UserName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile, setMobile] = useState("");
    const [check,setcheck] = useState(false);
    const [Error, setError] = useState(false)
    const handleSignup = () => {
        // Store the form data in localStorage
        localStorage.setItem('Name', JSON.stringify(Name));
        localStorage.setItem('UserName', JSON.stringify(UserName));
        localStorage.setItem('Email', JSON.stringify(Email));
        localStorage.setItem('Mobile', JSON.stringify(Mobile));
        // Navigate to the next page (replace '/next-page' with the actual URL)
        // history.push('/next-page');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(Name, UserName, Email, Mobile)
        // const formData = {
        //     Name,
        //     UserName,
        //     Email,
        //     Mobile
        // };
        // setName("");
        // setUserName("");
        // setEmail("");
        // setMobile("");

        if (Name.length === 0 || UserName.length === 0 || Email.length === 0 || Mobile.length === 0 || check===false) {
            setError(true);
        }

        else {
            setError(false);
        }
    }
    return (

        <div className='main'>
            <img className='leftimage' src={image} alt='' />
            <h1 className='lefttext'>Discover new things on <br></br>Superapp</h1>
            <div className="form-container">
                <div className="form-group">
                    <img className='superimg' src={super1} alt='' />
                </div>
                <div className="form-group1">
                    <span id='account'>Create your new account</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" id="Name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        {Error && Name.length <= 0 ? <label id='error'>ENTER THE NAME  !</label> : ""}
                    </div>
                    <div className="form-group">
                        <input type="text" id="UserName" placeholder="UserName" onChange={(e) => setUserName(e.target.value)} />
                        {Error && UserName.length <= 0 ? <label id='error'>ENTER THE USERNAME  !</label> : ""}
                    </div>
                    <div className="form-group">
                        <input type="email" id="Email" placeholder="Email" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" onChange={(e) => setEmail(e.target.value)} />
                        {Error && Email.length <= 0 ? <label id='error'>ENTER THE EMAIL  !</label> : ""}
                    </div>
                    <div className="form-group1">
                        <input type="tel" id="Mobile" placeholder="Mobile" onChange={(e) => setMobile(e.target.value)} />
                        {Error && Mobile.length <= 0 ? <label id='error'>ENTER THE MOBILE  !</label> : ""}
                    </div>
                    <div className="form-group1">
                        <label>
                            <input type="checkbox" className='check' onChange={(e) => setcheck(e.target.checked)}/> Share my registration data with Superapp
                            {Error && check === false ? <label id='error'>FILL THE CHECKBOX  !</label> : ""}
                        </label>
                    </div>
                    <button type="submit" onClick={handleSignup} >SIGN UP</button>
                    {/* <div className="form-group"> */}
                    <p className='plaintext'>By clicking on Sign up. you agree to Superapp <span className='greentext'>Terms and<br></br>
                        Conditions of Use</span></p>
                    {/* </div> */}
                    {/* <div className="form-group"> */}
                    <p className='plaintext'>To learn more about how Superapp collects, uses, shares and<br></br> protects your personal data please head Superapp<span className='greentext'> Privacy <br></br>Policy</span></p>
                    {/* </div> */}
                </form>
            </div>
        </div>
    );
};

export default Form;
