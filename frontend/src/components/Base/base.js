// Base.js
import React, { useState } from 'react';                  // Import React and the useState hook for managing component state
import 'bootstrap/dist/css/bootstrap.min.css';           // Import Bootstrap CSS for styling
import 'bootstrap/dist/js/bootstrap.bundle.min.js';      // Import Bootstrap JS for interactive components
import Sidebar from './Sidebar';                         // Import the Sidebar component
import MainContent from './MainContent';                 // Import the MainContent component

const Base = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // useState hook to manage the sidebar's open/closed state

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);                 // Function to toggle the sidebar's state between open and closed
    };

    return (
        <div>
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <MainContent>
                {children}
            </MainContent>
        </div>
    );
};

export default Base;                                    // Export the Base component as the default export
