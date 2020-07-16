import { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(initialValue)
    const bodyElement = document.querySelector('body')

    // const bodyElement = document.querySelector('body')
    
    
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        console.log('jf: useDarkMode.js: UE', darkMode)
        if (darkMode === true) {
            return bodyElement.classList.add('dark-mode')
        }
        return bodyElement.classList.remove('dark-mode')
    }, [darkMode])

    return [darkMode, toggleMode]
} 