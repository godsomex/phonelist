import React from 'react';
import PhoneBook from './PhoneBook';
import Nav from './Nav';
import styled from '@emotion/styled';

function App() {
    return (
        <AppStyles>
            <Nav />
            <PhoneBook />
        </AppStyles>
    );
}

export default App;

const AppStyles = styled.div`
    margin: auto;
`;
