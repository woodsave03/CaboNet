import React from 'react';

import './DatabaseScreen.css';

const DatabaseScreen: React.FC = () => {
    return (
        <div className="database screen">
            <h1>Database Management</h1>
            <p>This is the database management screen.</p>
            <div className="database-actions">
                <button className="action-button">Create Backup</button>
                <button className="action-button">Restore Backup</button>
                <button className="action-button">Optimize Database</button>
            </div>
        </div>
    );
};

export default DatabaseScreen;