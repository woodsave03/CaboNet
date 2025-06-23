import React from 'react';

const DBBuilderScreen: React.FC = () => {
    return (
        <div className="db-builder screen">
            <h1>Database Builder</h1>
            <p>This is the database builder screen.</p>
            <div className="db-builder-actions">
                <button className="action-button">Create Database</button>
                <button className="action-button">Delete Database</button>
                <button className="action-button">Update Schema</button>
            </div>
        </div>
    );
}

export default DBBuilderScreen;