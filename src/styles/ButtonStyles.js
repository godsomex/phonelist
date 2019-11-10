import styled from '@emotion/styled';
export const ButtonStyles = styled.div`
    button {
        height: 47px;
        background-color: #19232d;
        color: #ffffff;
        font-size: 1.2rem;
        &:hover {
            cursor: pointer;
            background-color: #ffffff;
            color: #19232d;
        }
    }

    .button-group {
        display: flex;
        justify-content: space-between;
        border-radius: 1px;
        padding: 25px 30px;

        @media all and (max-width: 767px) {
            .cols {
                display: flex;
                padding: 10px 0;
                &:before {
                    color: #6c7a89;
                    padding-right: 10px;
                    content: attr(data-label);
                    flex-basis: 50%;
                    text-align: right;
                }
            }
        }
    }
`;
