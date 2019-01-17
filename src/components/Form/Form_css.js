import styled from 'styled-components';

export const Form = styled.div`
    grid-column: 4 / 7;
`;

export const Input = styled.input`
    display: block;
    margin: 0 0 5%;
    background-color: #f5f5f5;
    border: none;
    border-bottom: 2px solid #ccc;
`;

export const Button = styled.button`
    background-color: #0475cef5;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 2.5%;
    width: 150px;

    :hover {
        background-color: #0761a9f5
    }
`;