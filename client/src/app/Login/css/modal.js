import styled from 'styled-components';


export const OpenModalButton = styled.button`
    padding: 1.6%;
    border-radius: 50px;
    border: none;
    background-color: #f93e3e;
    color: #fff;
    position: absolute;
    top: 25%;
    right: 1.5%;
    cursor: pointer;
    outline: none;
    width: 2.3%;
    height: 8%;

    :hover {
        background-color: #b01e25;
    }

    // Looks like the content by iteself gives werid side affects
    // So to control it we throw it in a span tag. The button 
    // is wrapping around the span tag. Will have to adjust for media queries. 
    & > span {
        position: absolute;
        top: -15.8%;
        right: 20%;
        font-size: 2.5em;

        @media(min-width: 1600px) {
            font-size: 4em;
            top: -1.8%;
            right: 24%;
        }
    }
`;

export const CloseModalButton = styled.button`
    padding: 1% 1.5%;
    font-size: 1.3em;
    border-radius: 50px;
    border: none;
    background-color: #f93e3e;
    color: #fff;
    position: fixed;
    top: 16%;
    right: 31%;
    cursor: pointer;
    outline: none;

    :hover {
        background-color: #b01e25;
    }

    @media(min-width: 1600px) {
        padding: 1% 1.2%;
        right: 31.2%;
    }
`;

export const customModalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#2d2d2dba'
    },
    content: {
        padding: '0',
        width: '35%',
        height: '60%',
        margin: 'auto',
    }
}