// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useActiveLink } from "../../context/ActiveLinkContext";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const { activeLink, updateActiveLink } = useActiveLink();

    return (
        <nav className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
            <header>
                <div className="image-text">
                    <span className="image">
                        <img alt="Logo" className="logo" />
                    </span>
                </div>
                <button type="button" className="toggle" onClick={toggleSidebar}>
                    <span className={isSidebarOpen ? 'toggle' : ''}></span>
                </button>
            </header>
            <div className="menu-bar">
                <ul className="menu list-unstyled">
                    <li id="tasks-li" className={activeLink === '/' ? 'active' : ''}
                        onClick={() => updateActiveLink('/')}>
                        <Link to="/" className="sidebar-link">
                            <i className="fa fa-tasks me-2 icon" />
                            <span className="nav-text">Tasks</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;