import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        theme ? document.querySelector("html").setAttribute("data-theme", "night") : document.querySelector("html").setAttribute("data-theme", "light")
    }, [theme]);

    const toggleTheme = () => {
        setTheme(!theme);
    }

    const getTheme = {
        theme,
        toggleTheme
    }


    return (
        <ThemeContext.Provider value={getTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;