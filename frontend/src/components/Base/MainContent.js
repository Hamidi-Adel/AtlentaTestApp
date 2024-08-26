// MainContent.js
import React from 'react';  // Import React for creating the component

const MainContent = ({ children }) => {
    return (
        <section className="tasks">
            {children}
        </section>
    );
};

export default MainContent;  // Export the MainContent component as the default export