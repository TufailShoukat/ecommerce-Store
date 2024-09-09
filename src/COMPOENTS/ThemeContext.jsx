

import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const theme = {
        isDarkMode,
        toggleTheme,
    };

    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
