import React from 'react';

import './PasswordsScreen.css';

const PasswordsScreen: React.FC = () => {
    return (
        <div className="passwords screen">
            <h1>Password Management</h1>
            <p>This is the password management screen.</p>
            <div className="password-actions">
                <button className="action-button">Add Password</button>
                <button className="action-button">Edit Password</button>
                <button className="action-button">Delete Password</button>
            </div>
        </div>
    );
};

export default PasswordsScreen;