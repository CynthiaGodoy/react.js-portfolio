import "./FormStyles.css"

import React from 'react'

import BackgroundImg from "../assets/desk.jpg";

const Form = () => {
    return (
        <div className="background">
            <img className="desk-img" src={ BackgroundImg } alt="desk"/>
        
        <div className="top">
            <h1 className="form-heading">Contact</h1>
            <p className="form-info">Let's Talk</p>
                <div className="form-container">
                    <form>
                        <label>Your Name</label><input type="name"></input>
                        <label>Email</label><input type="email"></input>
                        <label>Subject</label><input type="subject"></input>
                        <label>Message</label><textarea rows="5" placeholder="Type your message here"/>
                        <buttom className="btn">Submit</buttom>
                    </form>
                </div>
        </div></div>
    )
}

export default Form