import React from 'react';
import Container from '../containers';
import Layout from '../containers/Layout';
import "../globalstyles/contact.scss"
import Mail from '../images/mail.svg';
import Name from '../images/name.svg'


function Contact() {
    return (
        <Layout>
            <div className="contactPage">
                <Container>
                    <div className="formWrapper">
                        <h1>Let's work together!</h1>
                        <form className="form">
                            <div className="fieldWrapper">
                                <label>
                                    <img src={Name} alt="name-icon"></img>
                                    <input className="field" type="text" name="firstname" placeholder="Enter your full name"></input>
                                </label>
                            </div>
                           <div className="fieldWrapper">
                            <label>
                                    <img src={Mail} alt="mail-icon"></img>
                                    <input className="field" type="email" name="firstname" placeholder="Enter your email"></input>
                                </label>
                           </div>
                           
                            <button className="submit custom">Submit</button>
                        </form>
                    </div>
                </Container>
            </div>
        </Layout>
        
    )
}

export default Contact;