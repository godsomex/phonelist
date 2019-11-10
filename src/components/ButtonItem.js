import React from 'react';
import PhoneItem from './PhoneItem';
import { ButtonStyles } from '../styles/ButtonStyles';
function ButtonItem({ nachnameDuplicate, vornameDuplicate, telefonDuplicate }) {
    const showDuplicates = data => {
        console.log(data);
    };

    return (
        <ButtonStyles>
            <div className="button-group">
                <button
                    className="cols-1"
                    data-label="Nachname-button"
                    onClick={() => showDuplicates(nachnameDuplicate)}
                >
                    Nachname Duplicates
                </button>
                <button
                    className="cols-2"
                    data-label="Vorname-button"
                    onClick={() => showDuplicates(vornameDuplicate)}
                >
                    Vorname Duplicates
                </button>
                <button
                    className="cols-3"
                    data-label="Telefon-button"
                    onClick={() => showDuplicates(telefonDuplicate)}
                >
                    Telefon Duplicates
                </button>
                <button className="cols-4" data-label="Telefon-button">
                    Default PhoneList
                </button>
            </div>
        </ButtonStyles>
    );
}

export default ButtonItem;
