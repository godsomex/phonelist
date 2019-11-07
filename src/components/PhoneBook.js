import React, { useState } from 'react';
import PhoneItem from './PhoneItem';
import ButtonItem from './ButtonItem';
import { TableStyles } from '../styles/TableStyles';
import data from '../../data.json';
const initialState = data.objects;
function PhoneBook() {
    const [phoneLists, setPhoneList] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [showDuplicates, setShowDuplicates] = useState(false);

    const findDuplicates = (arrayOfObj, key) => {
        return arrayOfObj.filter(
            (item, index, array) =>
                array.map(subItem => subItem[key]).indexOf(item[key]) !== index
        );
    };

    const nachnameDuplicate = findDuplicates(phoneLists, 'Nachname'); // Remove Nachname duplication
    const vornameDuplicate = findDuplicates(phoneLists, 'Vorname'); // Remove Vorname duplication
    const telefonDuplicate = findDuplicates(phoneLists, 'Telefon'); // Remove Telefone duplication

    const duplicatePhoneList =
        nachnameDuplicate && vornameDuplicate && telefonDuplicate;

    return (
        <TableStyles>
            <div className="contain">
                <ButtonItem
                    className="responsive-button"
                    nachnameDuplicate={nachnameDuplicate}
                    vornameDuplicate={vornameDuplicate}
                    telefonDuplicate={telefonDuplicate}
                    showDuplicates={() => setShowDuplicates(true)}
                />
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="cols cols-1">ID</div>
                        <div className="cols cols-2">Vorname</div>
                        <div className="cols cols-3">Nachname</div>
                        <div className="cols cols-4">Telefone</div>
                        {!showDuplicates ? (
                            <button onClick={() => setShowDuplicates(true)}>
                                Show Duplicates
                            </button>
                        ) : (
                            <button onClick={() => setShowDuplicates(false)}>
                                Show All
                            </button>
                        )}
                    </li>
                    {showDuplicates && showDuplicates.length !== 0
                        ? duplicatePhoneList.map((fone, i) => (
                              <PhoneItem key={i} fone={fone} />
                          ))
                        : phoneLists.map((fone, i) => (
                              <PhoneItem key={i} fone={fone} />
                          ))}
                </ul>
            </div>
        </TableStyles>
    );
}

export default PhoneBook;
