import React from "react";
import "./ManagementScreen.css";

const ManagementScreen: React.FC = () => {
    return (
        <div className="management screen">
            <h1>Management</h1>
            <p>This is the management screen.</p>
            <div className="management-actions">
                <button className="action-button">User Management</button>
                <button className="action-button">System Settings</button>
                <button className="action-button">Logs</button>
            </div>
        </div>
    );
};

export default ManagementScreen;