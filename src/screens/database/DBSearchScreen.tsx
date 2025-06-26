import React from 'react';
import RockEntry, {rock_entry} from '../../components/db/RockEntry';

// define the DBSearchScreen properties
interface DBSearchScreenProps {
    rock_list: rock_entry[];
}

const DBSearchScreen: React.FC<DBSearchScreenProps> = ({rock_list}) => {


    return (
        <div className={"rock-entry-list"}>
            {
                rock_list.map((rock: rock_entry) => (
                    <RockEntry
                        key={rock.id}
                        name={rock.name}
                        group={rock.group}
                        family={rock.family}
                        locale={rock.locale}
                        description={rock.description}
                        id={rock.id}
                    />
                ))
            }
        </div>
    );
}


export default DBSearchScreen;