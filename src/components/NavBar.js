import React from 'react';
import { FaGithub, FaLinkedin, FaHome, FaLightbulb } from 'react-icons/fa';
import { IoDocumentTextSharp } from 'react-icons/io5'
import { useLocation } from "react-router-dom";

import {
    Button,
    A, 
    StyledLink,
    H1, 
    H2,
    Header, 
    Nav, 
} from './StyledComponents'

const NavBar = (props) => {

    const location = useLocation();

    const toggleMode = e => {
        e.preventDefault();
        props.setDarkMode(!props.darkMode);
    }
    
    return(
        <Header className='header'>
            <H1 className='title'>Will Phillips</H1>
            <H2 className='headline'>Full-Stack Web Developer based in Bentonville, Arkansas.</H2>
            <Nav>
                <A className = 'GitHub-Button' target='_blank' href='https://github.com/WRWPhillips/'><FaGithub /> GitHub</A>
                <A className = 'LinkedIn-Button' target='_blank' href='https://www.linkedin.com/in/wrwphillips/'><FaLinkedin /> LinkedIn</A>
                { location.pathname === "/resume" ?
                    <StyledLink className='Home-Link' to="/"><FaHome />Home</StyledLink> :
                    <StyledLink className='Resume-Link' to="/resume"><IoDocumentTextSharp />Resume</StyledLink> 
                }
                <Button className = 'dark-mode-Button' onClick={toggleMode}><FaLightbulb /> {props.darkMode ? 'Light' : 'Dark'}</Button>
            </Nav>
        </Header>
    )
}

export default NavBar;