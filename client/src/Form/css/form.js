import styled from 'styled-components';

export const Form = styled.div`
    grid-column: 1 / -1;
    border: 2px solid;

    @media(min-width: 800px) {
        grid-column: 3 / 7;
        grid-row: 1 / auto;
    }
`;

export const Title = styled.p`
    font-size: 2rem;
    font-weight: 900;
`;

export const SubTitle = styled.p`
    margin: 0 0 10%;
    line-height: 30px;
`;

export const Input = styled.input`
    display: block;
    width: 80%;
    font-size: 1.4rem;
    margin: 0 0 5%;
    padding: 4% 0;
    background-color: #f5f5f5;
    border: none;
    border-bottom: 2px solid #ccc;

    :focus {
        outline: 0;
        border-bottom: 2px solid #f93e3e;
    }
`;

export const Button = styled.button`
    font-size: 1.2rem;
    background-color: #0475cef5;
    color: #fff;
    border: none;
    border-radius: 20px;
    margin: 2.5% 0;
    padding: 3% 2.5%;
    width: 150px;

    :hover {
        background-color: #0761a9f5
    }

    :focus {
        outline: 0;
    }
`;