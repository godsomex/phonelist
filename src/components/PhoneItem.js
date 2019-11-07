import React from 'react';
import { ItemStyles } from '../styles/ItemStyles';
function PhoneItem(fone) {
    const {
        fone: { ID, Vorname, Nachname, Telefon },
    } = fone;

    return (
        <ItemStyles>
            <li className="table-row">
                <div className="cols cols-2" data-label="ID">
                    {ID}
                </div>
                <div className="cols cols-2" data-label="Vorname">
                    {Vorname}
                </div>
                <div className="cols cols-2" data-label="Nachname">
                    {Nachname}
                </div>
                <div className="cols cols-2" data-label="Telefon">
                    {Telefon}
                </div>
            </li>
        </ItemStyles>
    );
}

export default PhoneItem;
