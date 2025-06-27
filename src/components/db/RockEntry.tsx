import React, {useState} from 'react';

import './RockEntry.css';
import CopyIcon from '../util/CopyIcon';
import CheckIcon from '../util/CheckIcon';
import SelectButton from "../util/SelectButton";

interface rock_entry {
    name: string;
    group: string;
    family: string;
    locale: string;
    description: string;
    id: number;
}

interface props {
    rock_entry: rock_entry;
    className?: string;
    onSelect: () => void;
    isSelected?: boolean;
}

const RockEntry: React.FC<props> = ({rock_entry, className, onSelect, isSelected}) => {
    const [copied, setCopied] = useState(false);

    if (!rock_entry) {
        rock_entry = {
            name: "Name",
            group: "Group",
            family: "Family",
            locale: "Locale",
            description: "Description",
            id: -1
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(rock_entry.description)
            .then(() => {
                setCopied(true);
                console.log('Description copied to clipboard:', rock_entry.description);
                setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
            })
            .catch(err => console.error('Failed to copy text: ', err));
    };

    const toggleSelect = () => {
        onSelect();
        console.log(`Toggling selection for rock entry: ${rock_entry.name}`);
    }

    return (
        <div className={`rock-entry ${className} ${isSelected ? 'selected' : ''}`}>
            <div className={"grouped"}>
                <SelectButton isSelected={isSelected} onToggle={toggleSelect}/>
                <div className="rock-entry__name field">
                    <p>
                        {rock_entry.name}
                    </p>
                </div>
            </div>
            <div className="rock-entry__group field">
                <p>
                    {rock_entry.group}
                </p>
            </div>
            <div className="rock-entry__family field">
                <p>
                    {rock_entry.family}
                </p>
            </div>
            <div className="rock-entry__locale field">
                <p>
                    {rock_entry.locale}
                </p>
            </div>
            <div className="field rock-entry__description">
                <p>
                    {rock_entry.description}
                </p>
                <div className="rock-entry__copy-icon" onClick={handleCopy}>
                    {copied ? <CheckIcon className="check-icon"/> : <CopyIcon className="copy-icon"/>}
                </div>
            </div>
        </div>
    );
};

export default RockEntry;

export {rock_entry};