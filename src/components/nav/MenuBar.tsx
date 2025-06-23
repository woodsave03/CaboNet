import React from 'react';
import './MenuBar.css';

interface MenuBarProps {
    onNavigate: (screen: string) => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ onNavigate }) => {
    return (
        <div className={"menu-bar"}>
            <div className={"menu-item"} onClick={() => onNavigate('database')}>Database</div>
            <div className={"menu-item"} onClick={() => onNavigate('passwords')}>Passwords</div>
            <div className={"menu-item"} onClick={() => onNavigate('management')}>Management</div>
        </div>
    );
};

export default MenuBar;