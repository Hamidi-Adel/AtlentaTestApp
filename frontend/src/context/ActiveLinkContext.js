// ActiveLinkContext.js
import { createContext, useContext, useState } from 'react';

const ActiveLinkContext = createContext();

export const useActiveLink = () => useContext(ActiveLinkContext);

export const ActiveLinkProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState('');

    const updateActiveLink = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <ActiveLinkContext.Provider value={{ activeLink, updateActiveLink }}>
            {children}
        </ActiveLinkContext.Provider>
    );
};
