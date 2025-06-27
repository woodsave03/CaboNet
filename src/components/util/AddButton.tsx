import React from 'react';

import './AddButton.css';

interface props {
    onClick: () => void; // Function to call when the button is clicked
    deactivated?: boolean; // Optional prop to indicate if the button is deactivated
}

const AddButton: React.FC<props> = ({ onClick, deactivated = false }) => {
    return (
        <button
            className={`add-button ${deactivated ? 'deactivated' : ''}`}
            onClick={onClick}
            disabled={deactivated} // Disable the button if deactivated is true
        >
            New
        </button>
    )
}

export default AddButton;