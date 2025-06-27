import React, {useState} from 'react';
import RockEntry, {rock_entry} from '../../components/db/RockEntry';
import FilterBar from '../../components/db/FilterBar';

// define the DBSearchScreen properties
interface DBSearchScreenProps {
    rock_list: rock_entry[];
}

const DBSearchScreen: React.FC<DBSearchScreenProps> = ({rock_list}) => {
    const [selectedRocks, setSelectedRocks] = useState<Set<number>>(new Set());
    const [selectAll, setSelectAll] = useState(false);

    const toggleRockSelection = (id: number) => {
        setSelectedRocks(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
                if (selectAll) {
                    // If we are in "select all" mode, we need to toggle the select all state
                    setSelectAll(false);
                }
            } else {
                newSet.add(id);
                if (newSet.size === rock_list.length) {
                    // If all rocks are selected, set selectAll to true
                    setSelectAll(true);
                }
            }
            return newSet;
        })
    }

    const toggleAllRocksSelection = () => {
        setSelectedRocks(prev => {
            const newSet = new Set<number>();
            if (prev.size === rock_list.length) {
                setSelectAll(false);
                // If all are selected, clear the selection
                return newSet;
            } else {
                // Otherwise, select all
                setSelectAll(true);
                rock_list.forEach(rock => newSet.add(rock.id));
                return newSet;
            }
        });
    }

    return (
        <div className={'database-interface'}>
            <FilterBar rock_list={rock_list} />
            <RockEntry rock_entry={null}
                       className={"key"}
                       isSelected={selectAll}
                       onSelect={() => toggleAllRocksSelection()}
            />
            <div className={"rock-entry-list"}>
                {
                    rock_list.map((rock: rock_entry) => (
                        <RockEntry
                            key={rock.id}
                            rock_entry={rock}
                            onSelect={() => toggleRockSelection(rock.id)}
                            isSelected={selectedRocks.has(rock.id)}
                        />
                    ))
                }
            </div>
        </div>
    );
}


export default DBSearchScreen;