import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import MenuBar from './components/nav/MenuBar';
import DatabaseScreen from './screens/DatabaseScreen';
import PasswordsScreen from './screens/PasswordsScreen';
import ManagementScreen from './screens/ManagementScreen';
import './app.css'; // Import global styles
import './brand/colors.css';

const App: React.FC = () => {
    const [screen, setScreen] = useState<'database' | 'passwords' | 'management'>('database');

    const renderScreen = () => {
        switch (screen) {
            case 'database':
                return <DatabaseScreen />;
            case 'passwords':
                return <PasswordsScreen />;
            case 'management':
                return <ManagementScreen />;
            default:
                return null;
        }
    };

    return (
        <>
            <MenuBar onNavigate={() => setScreen}/>
            {renderScreen()}
        </>
    );
};

export default App;