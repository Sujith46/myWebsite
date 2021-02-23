import React from 'react';
import Container from '../../containers';
import "./style.scss"

export default function Footer() {
    return (
        <footer>
            <Container>
                <div className="footerLinks">
                    <a href="https://github.com/Sujith46" rel="noreferrer" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/sujith-s-b22409162/" rel="noreferrer" target="_blank">Linkedin</a>
                    <a href="https://twitter.com/sujiths46?lang=en" rel="noreferrer" target="_blank">Twitter</a>
                </div>
            </Container>
        </footer>
    )
}