// ActiveLinkContext.js
import { createContext, useContext, useState } from 'react';  // Import necessary functions from React

// Create a new context for managing the active link state
const ActiveLinkContext = createContext();

// Custom hook to use the ActiveLinkContext in other components
export const useActiveLink = () => useContext(ActiveLinkContext);

// Provider component to wrap parts of the app that need access to the active link state
export const ActiveLinkProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState('');  // State to store the currently active link

    // Function to update the active link state
    const updateActiveLink = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <ActiveLinkContext.Provider value={{ activeLink, updateActiveLink }}>
            {children}  // Render children components with access to the context
        </ActiveLinkContext.Provider>
    );
};