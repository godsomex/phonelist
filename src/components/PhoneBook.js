import React, { useState } from 'react';
import PhoneItem from './PhoneItem';
import { TableStyles } from '../styles/TableStyles';
import data from '../../data.json';
const initialState = data.objects;
function PhoneBook() {
    const [phoneLists, setPhoneList] = useState(initialState);
    const [loading, setLoading] = useState(false);

    return (
        <TableStyles>
            <div className="contain">
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="cols cols-1">ID</div>
                        <div className="cols cols-2">Vorname</div>
                        <div className="cols cols-3">Nachname</div>
                        <div className="cols cols-4">Telefone</div>
                    </li>
                    {!loading && phoneLists.length === 0 ? (
                        <div> no phoneLists to display</div>
                    ) : (
                        phoneLists.map((fone, i) => (
                            <PhoneItem key={i} fone={fone} />
                        ))
                    )}
                </ul>
            </div>
        </TableStyles>
    );
}

export default PhoneBook;
