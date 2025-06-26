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

const RockEntry: React.FC<rock_entry> = ({name, group, family, locale, description, id}) => {
    const [copied, setCopied] = useState(false);
    const [selected, setSelected] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(description)
            .then(() => {
                setCopied(true);
                console.log('Description copied to clipboard:', description);
                setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
            })
            .catch(err => console.error('Failed to copy text: ', err));
    };

    const toggleSelect = () => {
        setSelected(prev => !prev);
    }

    return (
        <div className={`rock-entry ${selected ? 'selected' : ''}`}>
            <div className={"grouped"}>
                <SelectButton isSelected={selected} onToggle={toggleSelect}/>
                <div className="rock-entry__name field">
                    <p>
                        {name}
                    </p>
                </div>
            </div>
            <div className="rock-entry__group field">
                <p>
                    {group}
                </p>
            </div>
            <div className="rock-entry__family field">
                <p>
                    {family}
                </p>
            </div>
            <div className="rock-entry__locale field">
                <p>
                    {locale}
                </p>
            </div>
            <div className="field rock-entry__description">
                <p>
                    {description}
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