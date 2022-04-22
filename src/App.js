import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes";
import NavBar from "./components/NavBar";
import RepoCards from "./components/RepoCards";

import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [darkMode, setDarkMode] = useDarkMode(); 

  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
      <>
        <GlobalStyles/>
          <div className="App">
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <RepoCards />
          </div>
      </>
    </ThemeProvider>
  );
}

export default App;
