import React from 'react';
import { useState } from 'react';

interface Props {
    onNavigate: (screen: string) => void;
}

const DBSidebar: React.FC<Props> = ({ onNavigate }) => {
    const [activeScreen, setActiveScreen] = useState<string>('search');

    const handleNavigation = (screen: string) => {
        setActiveScreen(screen);
        onNavigate(screen);
    };


    // Sidebar entries: Search, Edit, Blurbs, Builder
    return (
        <div className="db-sidebar">
            <div
                className={`sidebar-item ${activeScreen === 'search' ? 'active' : ''}`}
                onClick={() => handleNavigation('search')}
            >
                Search
            </div>
            <div
                className={`sidebar-item ${activeScreen === 'edit' ? 'active' : ''}`}
                onClick={() => handleNavigation('edit')}
            >
                Edit
            </div>
            <div
                className={`sidebar-item ${activeScreen === 'blurbs' ? 'active' : ''}`}
                onClick={() => handleNavigation('blurbs')}
            >
                Blurbs
            </div>
            <div
                className={`sidebar-item ${activeScreen === 'builder' ? 'active' : ''}`}
                onClick={() => handleNavigation('builder')}
            >
                Builder
            </div>
        </div>
    );
};

export default DBSidebar;