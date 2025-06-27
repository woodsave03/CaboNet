import React from 'react';

import './DeleteButton.css';

interface props {
    onClick: () => void;
    disabled?: boolean;
}

const DeleteButton: React.FC<props> = ({ onClick, disabled = false }) => {
    return (
        <button className="delete-button" onClick={onClick} disabled={disabled}>
            Delete
        </button>
    )
}

export default DeleteButton;