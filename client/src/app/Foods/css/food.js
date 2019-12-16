import styled from 'styled-components';

export const FoodStyleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column
    height: 75%;
`;

export const FoodDetailsContainer = styled.div`
    position: relative;
    margin: 1.5% 0;
`;

export const FoodDetails = styled.p`
    font-size: 1.3rem;
`; 

export const FoodAreaContainer = styled.div``;

export const FoodAreaTitle = styled.p`
    font-size: 1.3rem;
    margin-bottom: 1.3%;
`; 

export const FoodArea = styled.textarea`
    width: 100%;
    height: 75px;
    resize: none;
`;

export const FoodListButton = styled.button`
    font-size: 1.2rem;
    background-color: #0475cef5;
    color: #fff;
    border: none;
    border-radius: 20px;
    margin: 2.5% 0;
    padding: 3% 2.5%;
    width: 100%;

    :hover {
        background-color: #0761a9f5;
    }

    :focus {
        outline: 0;
    }

    @media (min-width: 800px) {
        width: 150px;
    }
`;

export const RemoveFoodBtn = styled.button`
    position: absolute;
    left: 98px;
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

    @media (min-width: 800px) {}
`;