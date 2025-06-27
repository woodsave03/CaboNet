import React from 'react';

import './ExportButton.css';

interface props {
    onClick: () => void;
    disabled?: boolean;
}

const ExportButton: React.FC<props> = ({ onClick, disabled = false }) => {
    return (
        <button
            className="export-button"
            onClick={onClick}
            disabled={disabled}
        >
            Export
        </button>
    )
}

export default ExportButton;