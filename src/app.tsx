import React, { useState } from 'react';
import MenuBar from './components/nav/MenuBar';
import DatabaseScreen from './screens/DatabaseScreen';
import PasswordsScreen from './screens/PasswordsScreen';
import ManagementScreen from './screens/ManagementScreen';
// import { MongoClientWrapper } from "./plugins/mongodb";
import './app.css'; // Import global styles

const App: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState<'database' | 'passwords' | 'management'>('database');

    const onNavigate = (screen: string) => {
        // Logic to handle navigation, e.g., updating state or routing
        console.log(`Navigating to ${screen}`);
        setCurrentScreen(screen as 'database' | 'passwords' | 'management');
    };

    // Initialize MongoDB client
    // React.useEffect(() => {
    //     const initializeMongoDB = async () => {
    //         try {
    //             await MongoClientWrapper.connect();
    //             console.log('MongoDB client initialized successfully');
    //         } catch (error) {
    //             console.error('Error initializing MongoDB client:', error);
    //         }
    //     };
    //     initializeMongoDB();
    // }, []);

    // Placeholder for rock_list, replace with actual data fetching logic
    const rock_list = [{
        name: 'Sample Rock',
        group: 'Igneous',
        family: 'Granite',
        locale: 'Earth',
        description: 'A sample rock entry for demonstration purposes.',
        id: 1
    }];

    return (
        <>
            <MenuBar onNavigate={onNavigate}/>
            <div className="app-container">
                {currentScreen === 'database' && <DatabaseScreen rock_list={ rock_list } />}
                {currentScreen === 'passwords' && <PasswordsScreen />}
                {currentScreen === 'management' && <ManagementScreen />}
            </div>
        </>
    );
};

export default App;