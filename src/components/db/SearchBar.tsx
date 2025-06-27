import React from 'react';

import './SearchBar.css';

interface props {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<props> = ({ onSearch }) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div className="search-bar" >
            <label htmlFor={"search-input"}>Search:</label>
            <input
                id={"search-input"}
                type="text"
                placeholder="Search rocks..."
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default SearchBar;