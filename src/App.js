import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes";
import NavBar from "./components/NavBar";
import RepoCards from "./components/RepoCards";

import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [darkMode, setDarkMode] = useDarkMode(); 
  
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

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
