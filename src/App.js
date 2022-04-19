import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes";
import NavBar from "./components/NavBar";

import useDarkMode from "./hooks/useDarkMode";

function App() {
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
  margin-top: 0;
`

const Header = styled.div`
  border: .5em solid ${props => props.theme.borderColor};
  display: flex;
  flex-flow: row wrap;
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

  const [darkMode, setDarkMode] = useDarkMode();
  const [repos, setRepos] = useState([])
  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
      <>
        <GlobalStyles/>
          <div className="App">
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
          </div>
      </>
    </ThemeProvider>
  );
}

export default App;
