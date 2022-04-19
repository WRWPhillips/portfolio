import useLocalStorage from "./useLocalStorage"

const useDarkMode = () => {
    console.log('using dark mode')
    const [darkMode, setDarkMode] = useLocalStorage('mode', false)
    return [darkMode, setDarkMode]
}
export default useDarkMode