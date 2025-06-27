import React from 'react';

import './ColumnSelector.css';

interface props {
    columns: string[];
    selectedColumns: string[];
    onColumnToggle: (column: string) => void;
}

const ColumnSelector: React.FC<props> = ({columns, selectedColumns, onColumnToggle}) => {
    return (
        <select className="column-selector">
            {columns.map((column) => (
                <option>
                    <label key={column} className="column-checkbox">
                        <input
                            type="checkbox"
                            checked={selectedColumns.includes(column)}
                            onChange={() => onColumnToggle(column)}
                        />
                        {column}
                    </label>
                </option>
            ))}
        </select>
    );
}

export default ColumnSelector;