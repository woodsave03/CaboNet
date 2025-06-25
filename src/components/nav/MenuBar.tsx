import React, { useState } from 'react';
import './MenuBar.css';

interface MenuBarProps {
    onNavigate: (screen: string) => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ onNavigate }) => {
    const [activeScreen, setActiveScreen] = useState<string>('search');

    const handleNavigation = (screen: string) => {
        setActiveScreen(screen);
        onNavigate(screen);
    };

    return (
        <div className={"menu-bar"}>
            <div className={`menu-item ${activeScreen === 'database' ? 'active' : ''}`} onClick={() => handleNavigation('database')}>Database</div>
            <div className={`menu-item ${activeScreen === 'passwords' ? 'active' : ''}`} onClick={() => handleNavigation('passwords')}>Passwords</div>
            <div className={`menu-item ${activeScreen === 'management' ? 'active' : ''}`} onClick={() => handleNavigation('management')}>Management</div>
        </div>
    );
};

export default MenuBar;