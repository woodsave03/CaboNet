import React from 'react';

import './CheckIcon.css';

interface CheckIconProps {
    className?: string;
}

const CheckIcon: React.FC<CheckIconProps> = ({className}) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="22.903" height="19.395">
            <path d="M22.903 2.828 20.075 0 6.641 13.435 3.102 9.09 0 11.616l6.338 7.779L22.903 2.828z"/>
        </svg>
    );
}

export default CheckIcon;