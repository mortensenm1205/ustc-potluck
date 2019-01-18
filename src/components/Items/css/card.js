import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    background-color: #fff;
    height: 250px;
    width: 25%;
    display: inline-block;
    box-sizing: border-box;
    box-shadow: 1px 17px 24px 5px #e0e0e0;
    margin: 0 3% 4% 0;
    padding: 2.5%;
`;

export const CardName = styled.p`
    font-weight: 700;
`;

export const CardItem = styled.p``;

export const CloseCard = styled.button`
    position: absolute;
    top: -17px;
    left: -14px;
    border: none;
    border-radius: 30px;
    padding: 3% 7%;
    font-size: 1.6rem;
`;