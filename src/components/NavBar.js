import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display:inline-block;
    padding:0.35em 1.2em;
    border:0.2em solid ${props => props.theme.borderColor};
    margin:0 0.3em 0.3em 0;
    border-radius:0.15em;
    height: 30px;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color: ${props => props.theme.textColor};
    font-size: 1em;
    background-color: ${props => props.theme.backgroundColor};
    text-align:center;
    transition: all 0.2s;
    margin-bottom: 3%;
    @media (max-width:600px) {
        width: 100%;
    }
    &: hover {
        color: ${props => props.theme.backgroundColor};
        background-color: ${props => props.theme.textColor};
    }
`;

const A = styled.a`
    display:inline-block;
    padding:0.35em 1.2em;
    border:0.2em solid ${props => props.theme.borderColor};
    margin:0 0.3em 0.3em 0;
    border-radius:0.15em;
    height: 30px;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color: ${props => props.theme.textColor};
    font-size: 1em;
    background-color: ${props => props.theme.backgroundColor};
    text-align:center;
    transition: all 0.2s;
    margin-bottom: 3%;
    @media (max-width:600px) {
        width: 100%;
    }
    &: hover {
        color: ${props => props.theme.backgroundColor};
        background-color: ${props => props.theme.textColor};
    }
`;

const H1 = styled.h1`
    font-size: 3.5em;
    font-style: italic;
    margin-bottom: 0;
`;

const H2 = styled.h2`
    font-size: 2em;
    margin-top: 5%;
`;

const Header = styled.div`
    border: .5em solid ${props => props.theme.borderColor};
    display: flex;
    flex-flow: column wrap;
    width: 80%;
    align-content: center;
    margin: 5% auto;
    text-align: center;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    @media(max-width:600px) {
        flex-flow: column nowrap;
        height: 20vh;
        padding: 5%;
        padding-bottom: 3%;
    }
`;


const NavBar = (props) => {
    const toggleMode = e => {
        e.preventDefault();
        props.setDarkMode(!props.darkMode);
    }
    
    return(
        <Header className='header'>
            <H1 className='title'>Will Phillips</H1>
            <H2 className='headline'>Full-Stack Web Developer based in Bentonville, Arkansas.</H2>
            <Nav>
                <A className = 'GitHub-Button' target='_blank' href='https://github.com/WRWPhillips/'>GitHub</A>
                <A className = 'LinkedIn-Button' target='_blank' href='https://www.linkedin.com/in/wrwphillips/'>LinkedIn</A>
                <A className = 'Medium-Button' target='_blank' href='https://medium.com/@42w.phillips42/'>Medium</A>
                <Button className = 'dark-mode-Button' onClick={toggleMode}>{props.darkMode ? 'Light Mode' : 'Dark Mode'}</Button>
            </Nav>
        </Header>
    )
}

export default NavBar;