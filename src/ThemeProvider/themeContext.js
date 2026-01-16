'use client'
// src/context/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { darkTheme, lightTheme } from '../theme'; // Import theme tokens

// Create a context for the theme
const ThemeContext = createContext();

// Theme provider to provide the theme state to the app
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // default to dark mode

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
