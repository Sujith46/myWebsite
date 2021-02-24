import React, {useState} from 'react';
import Container from '../containers';
import Layout from '../containers/Layout';
import "../globalstyles/contact.scss"
import Mail from '../images/mail.svg';
import Name from '../images/name.svg'


function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
    })

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "contact",
              ...formState
            })
          }).then(() => alert("Form submited!")).catch(error => alert(error))
        e.preventDefault();
    }

    return (
        <Layout>
            <div className="contactPage">
                <Container>
                    <div className="formWrapper">
                        <h1>Let's work together!</h1>
                        <form className="form" onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="contact"></input>
                            <div className="fieldWrapper">
                                <label>
                                    <img src={Name} alt="name-icon"></img>
                                    <input className="field" type="text" name="name" placeholder="Enter your full name" onChange={handleChange} value={formState.name}></input>
                                </label>
                            </div>
                           <div className="fieldWrapper">
                            <label>
                                    <img src={Mail} alt="mail-icon"></img>
                                    <input className="field" type="email" name="email" placeholder="Enter your email" onChange={handleChange} vlaue={formState.email}></input>
                            </label>
                           </div>
                           {/* <div>
                                <select>
                                    <option>Development</option>
                                    <option>Design</option>
                                </select>
                            </div> */}
                            <button className="submit custom">Submit</button>
                        </form>
                        <p>Once you have submitted your details, you will get the responce mail back within 3 days.</p>
                    </div>
                </Container>
            </div>
        </Layout>
        
    )
}

export default Contact;