import React from 'react';
import DBSidebar from '../components/nav/DBSidebar';
import DBBlurbsScreen from "./database/DBBlurbsScreen";
import DBBuilderScreen from "./database/DBBuilderScreen";
import DBEditScreen from "./database/DBEditScreen";
import DBSearchScreen from "./database/DBSearchScreen";
import { useState } from 'react';

import './DatabaseScreen.css';



const DatabaseScreen: React.FC = () => {
    // State to manage the current screen or section
    const [currentScreen, setCurrentScreen] = useState<'search' | 'edit' | 'blurbs' | 'builder'>('search');

    const onNavigate = (screen: string) => {
        // Logic to handle navigation, e.g., updating state or routing
        console.log(`Navigating to ${screen}`);
        setCurrentScreen(screen as 'search' | 'edit' | 'blurbs' | 'builder');
    };

    return (
        <div className="database screen">
            <DBSidebar onNavigate={onNavigate} />
            <div id={"database-content"}>
                {currentScreen === 'search' && <DBSearchScreen />}
                {currentScreen === 'edit' && <DBEditScreen />}
                {currentScreen === 'blurbs' && <DBBlurbsScreen />}
                {currentScreen === 'builder' && <DBBuilderScreen />}
            </div>
        </div>
    );
};

export default DatabaseScreen;