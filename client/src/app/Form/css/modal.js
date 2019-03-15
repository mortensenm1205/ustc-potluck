import styled from 'styled-components';


export const OpenModalButton = styled.button`
    padding: 0.3% 0.8%;
    font-size: 2.5em;
    border-radius: 50px;
    border: none;
    background-color: #f93e3e;
    color: #fff;
    position: absolute;
    top: 25px;
    right: 20px;
    cursor: pointer;
`;

export const CloseModalButton = styled.button`
    padding: 1% 2%;
    font-size: 1.3em;
    border-radius: 50px;
    border: none;
    background-color: #f93e3e;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
`;

export const customModalStyles = {
    content: {
        padding: '0',
        width: '35%',
        height: '60%',
        margin: 'auto',
    }
}