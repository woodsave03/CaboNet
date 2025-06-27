import React, {useState} from 'react';
import './MenuBar.css';
import ProfileIcon from "../util/ProfileIcon";

interface MenuBarProps {
    onNavigate: (screen: string) => void;
}

const MenuBar: React.FC<MenuBarProps> = ({onNavigate}) => {
    const [activeScreen, setActiveScreen] = useState<string>('database');

    const handleNavigation = (screen: string) => {
        setActiveScreen(screen);
        onNavigate(screen);
    };

    return (
        <div className={"menu-bar"}>
            <div className={"menu-pages"}>
                <div className={`menu-item ${activeScreen === 'database' ? 'active' : ''}`}
                     onClick={() => handleNavigation('database')}><h2>Database</h2></div>
                <div className={`menu-item ${activeScreen === 'passwords' ? 'active' : ''}`}
                     onClick={() => handleNavigation('passwords')}><h2>Passwords</h2></div>
                <div className={`menu-item ${activeScreen === 'management' ? 'active' : ''}`}
                     onClick={() => handleNavigation('management')}><h2>Management</h2></div>
            </div>
            <div className={"profile-container"}>
                <ProfileIcon className={"profile-icon"}/>
            </div>
        </div>
    );
};

export default MenuBar;