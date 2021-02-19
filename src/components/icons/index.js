import React from 'react';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import twitter from '../../images/twitter.svg';
import './style.scss';

function Icons() {
    return(
        <div className="icons-wrapper">
            <a href="https://github.com/Sujith46" rel="noreferrer" target="_blank"><img src={github} alt="github logo"></img></a>
            <a href="https://www.linkedin.com/in/sujith-s-b22409162/" rel="noreferrer" target="_blank"><img src={linkedin} alt="linkedin logo"></img></a>
            <a href="https://twitter.com/sujiths46?lang=en" rel="noreferrer" target="_blank"><img src={twitter} alt="github logo"></img></a>
        </div>
    )
}

export default Icons;