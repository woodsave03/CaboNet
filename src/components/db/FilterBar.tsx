import React from 'react';

import { rock_entry } from "./RockEntry";

import './FilterBar.css';
import SearchBar from './SearchBar';
import ExportButton from '../util/ExportButton';
import AddButton from '../util/AddButton';
import DeleteButton from '../util/DeleteButton';
import ColumnSelector from './ColumnSelector';

interface props {
    rock_list: rock_entry[]; // Replace 'any' with the actual type of your rock entries
}

const FilterBar: React.FC<props> = ({ rock_list }) => {

    const handleSearch = (query: string) : void => {
        return null;
    }

    const onExport = () : void => {
        console.log("Export button clicked");
    }

    const onAdd = () : void => {
        console.log("Add button clicked");
    }

    const onDelete = () : void => {
        console.log("Delete button clicked");
    }

    const onColumnToggle = (column: string) : void => {
        console.log(`Toggled column: ${column}`);
    }

    return (
        <div className="filter-bar">

            <SearchBar onSearch={handleSearch}/>
            <ExportButton onClick={onExport} />
            <AddButton onClick={onAdd} />
            <DeleteButton onClick={onDelete} />
            <ColumnSelector
                columns={rock_list.length > 0 ? Object.keys(rock_list[0]) : []}
                selectedColumns={[]}
                onColumnToggle={onColumnToggle}
            />
        </div>
    );
}

export default FilterBar;