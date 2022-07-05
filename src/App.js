import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Routes, Route } from "react-router-dom";


import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes";
import NavBar from "./components/NavBar";
import RepoCards from "./components/RepoCards";
import Resume from "./components/Resume";

import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [darkMode, setDarkMode] = useDarkMode(); 
  
  // useMediaQuery hook provided by MUI
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // MUI hook takes a second to load so this solves that problem
  useEffect(() => {
    setDarkMode(prefersDarkMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
      <>
        <GlobalStyles/>
          <div className="App">
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Routes>
              <Route path='/' element={<RepoCards />} />
              <Route path='/resume' element={<Resume />} />
            </Routes>
          </div>
      </>
    </ThemeProvider>
  );
}

export default App;
