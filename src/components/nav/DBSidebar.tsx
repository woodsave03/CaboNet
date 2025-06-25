import React, { useState } from 'react';

import './DBSidebar.css'; // Import the CSS for the sidebar

interface Props {
    onNavigate: (screen: string) => void;
}

const DBSidebar: React.FC<Props> = ({onNavigate}) => {
    const [activeScreen, setActiveScreen] = useState<string>('search');

    const handleNavigation = (screen: string) => {
        setActiveScreen(screen);
        onNavigate(screen);
    };


    // Sidebar entries: Search, Edit, Blurbs, Builder
    return (
        <div className="db-sidebar">
            <ul>
                <li
                    className={`sidebar-item ${activeScreen === 'search' ? 'active' : ''}`}
                    onClick={() => handleNavigation('search')}
                >
                    Search
                </li>
                <li
                    className={`sidebar-item ${activeScreen === 'edit' ? 'active' : ''}`}
                    onClick={() => handleNavigation('edit')}
                >
                    Edit
                </li>
                <li
                    className={`sidebar-item ${activeScreen === 'blurbs' ? 'active' : ''}`}
                    onClick={() => handleNavigation('blurbs')}
                >
                    Blurbs
                </li>
                <li
                    className={`sidebar-item ${activeScreen === 'builder' ? 'active' : ''}`}
                    onClick={() => handleNavigation('builder')}
                >
                    Builder
                </li>
            </ul>
        </div>
    );
};

export default DBSidebar;