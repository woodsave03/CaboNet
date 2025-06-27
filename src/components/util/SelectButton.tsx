import React, { useState } from 'react';

import CheckIcon from '../util/CheckIcon';

import './SelectButton.css';

interface SelectButtonProps {
    isSelected: boolean;
    onToggle?: () => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({ isSelected, onToggle }) => {



    return (
        <button
            className={`select-button ${isSelected ? 'selected' : ''}`}
            aria-pressed={isSelected}
            onClick={onToggle}
        >
            <div>
                {isSelected ? <CheckIcon className={"check-icon selected"}/> : ''}
            </div>
        </button>
    );
}

export default SelectButton;