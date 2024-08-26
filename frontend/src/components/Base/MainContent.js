// MainContent.js
import React from 'react';

const MainContent = ({ children }) => {
    return (
        <section className="tasks">
            {children}
        </section>
    );
};

export default MainContent;