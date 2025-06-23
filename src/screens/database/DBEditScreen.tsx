import React from 'react';

const DBEditScreen: React.FC = () => {
    return (
        <div className="edit screen">
            <h1>Edit Screen</h1>
            <p>This is the edit screen for database entries.</p>
            <form className="edit-form">
                <label htmlFor="entry-name">Entry Name:</label>
                <input type="text" id="entry-name" name="entry-name" required />

                <label htmlFor="entry-value">Entry Value:</label>
                <input type="text" id="entry-value" name="entry-value" required />

                <button type="submit" className="action-button">Save Changes</button>
            </form>
        </div>
    );
};


export default DBEditScreen;