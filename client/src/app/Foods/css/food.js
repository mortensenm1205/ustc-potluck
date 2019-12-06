import styled from 'styled-components';

export const Food = styled.div`
    position: relative;
`;

export const FoodDetails = styled.p`
    font-size: 1.3rem;
    margin: 2.5% 0;
`; 

export const RemoveFoodBtn = styled.button`
    position: absolute;
    top: 10px;
    left: 220px;
    border: none;
    font-size: 1.6rem;
    background-color: #fff;
    padding: 1% 2%;

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

    @media (min-width: 800px) {
        left: 344px;
    }
`;