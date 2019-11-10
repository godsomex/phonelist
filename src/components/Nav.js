import React from 'react';
import styled from '@emotion/styled';

function Nav() {
    return (
        <NavStyle>
            <div className="navbar">
                <a href="">Links</a>
            </div>
        </NavStyle>
    );
}

export default Nav;

const NavStyle = styled.div`
    .navbar {
        overflow: hidden;
        background-color: #333;
        position: fixed;
        top: 0;
        width: 100%;
    }

    .navbar a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    .navbar a:hover {
        background: #ddd;
        color: black;
    }

    .main {
        padding: 16px;
        margin-top: 30px;
        height: 1500px; /* Used in this example to enable scrolling */
    }
`;
