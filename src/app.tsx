import React, { useState } from 'react';
import MenuBar from './components/nav/MenuBar';
import DatabaseScreen from './screens/DatabaseScreen';
import PasswordsScreen from './screens/PasswordsScreen';
import ManagementScreen from './screens/ManagementScreen';
import './app.css'; // Import global styles

const App: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState<'database' | 'passwords' | 'management'>('database');

    const onNavigate = (screen: string) => {
        // Logic to handle navigation, e.g., updating state or routing
        console.log(`Navigating to ${screen}`);
        setCurrentScreen(screen as 'database' | 'passwords' | 'management');
    };

    return (
        <>
            <MenuBar onNavigate={onNavigate}/>
            <div className="app-container">
                {currentScreen === 'database' && <DatabaseScreen />}
                {currentScreen === 'passwords' && <PasswordsScreen />}
                {currentScreen === 'management' && <ManagementScreen />}
            </div>
        </>
    );
};

export default App;