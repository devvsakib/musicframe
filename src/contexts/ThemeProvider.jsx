import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        theme ? document.querySelector("html").setAttribute("data-theme", "night") : document.querySelector("html").setAttribute("data-theme", "light")
    }, [theme]);

    useEffect(() => {
        if (theme === 'dark'){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleDarkMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }


    const toggleTheme = () => {
        setTheme(!theme);
    }

    const getTheme = {
        theme,
        toggleTheme,
        handleDarkMode
    }


    return (
        <ThemeContext.Provider value={getTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;