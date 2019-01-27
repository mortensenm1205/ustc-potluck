import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    background-color: #fff;
    height: 115px;
    width: 90%;
    display: inline-block;
    box-sizing: border-box;
    box-shadow: 4px 9px 32px -10px #000;
    margin: 0 3% 4% 0;
    padding: 2.3%;
`;

export const CardName = styled.p`
    font-weight: 700;
`;

export const CardItem = styled.p`
    line-height: 25px;
`;

export const CloseCard = styled.button`
    position: absolute;
    top: 10px;
    left: 220px;
    border: none;
    font-size: 1.6rem;
    background-color: #fff;

    :hover {
        background-color: #f93e3e;
        color: #fff;
        border: 0.5px solid #757575;
        box-shadow: 9px 7px 14px -9px #000;
    }

    :active {
        transform: translateY(2px);
    }

    :focus {
        outline: 0;
    }

    @media(min-width: 800px) {
        left: 315px;
    }
`;