import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
display:inline-block;
padding:0.35em 1.2em;
border:0.2em solid ${props => props.theme.borderColor};
margin:0 0.3em 0.3em 0;
border-radius:0.15em;
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
&: hover {
color: ${props => props.theme.backgroundColor};
background-color: ${props => props.theme.textColor};
}
`
const A = styled.a`
display:inline-block;
padding:0.35em 1.2em;
border:0.2em solid ${props => props.theme.borderColor};
margin:0 0.3em 0.3em 0;
border-radius:0.15em;
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
&: hover {
color: ${props => props.theme.backgroundColor};
background-color: ${props => props.theme.textColor};
}
`
const H1 = styled.h1`
font-size: 3.5em;
font-style: italic;
margin-bottom: 0;
`

const H2 = styled.h2`
font-size: 2em;
margin-top: 5%;
`

const Header = styled.div`
border: .5em solid ${props => props.theme.borderColor};
display: flex;
flex-flow: column wrap;
width: 80%;
align-content: center;
margin-left: 10%;
margin-right: 10%;
margin-top: 5%;
text-align: center;
`
const Nav = styled.nav`
display: flex;
justify-content: space-around;
`


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
                <Button className = 'GitHub-Button' target='_blank' href='https://github.com/WRWPhillips'>GitHub</Button>
                <A className = 'LinkedIn-Button' target='_blank' href='https://www.linkedin.com/in/wrwphillips/'>LinkedIn</A>
                <Button className = 'Medium-Button' target='_blank' href='https://medium.com/@42w.phillips42'>Medium</Button>
                <Button className = 'dark-mode-Button' onClick={toggleMode}>Dark Mode</Button>
            </Nav>
        </Header>
    )
}

export default NavBar;