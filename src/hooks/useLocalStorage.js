import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
    const [mode, setMode] = useState(() =>{
        if (localStorage.getItem(key)) {
            return(JSON.parse(localStorage.getItem(key)))
          } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return(initialValue);
          }
        });
    
    const setStoredMode = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setMode(newValue);
        }    

    return [mode, setStoredMode]
}
export default useLocalStorage