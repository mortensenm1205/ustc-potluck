import styled from 'styled-components';

export const FormHolder = styled.div`
    margin: 5% 0 0 5%;
`;

export const Title = styled.p`
    font-size: 2rem;
    font-weight: 900;
    color: #b01e25;
    margin: 2.5% 0;
`;

export const SubTitle = styled.p`
    line-height: 30px;
`;

export const Form = styled.form`
    margin: 1.5% 0;
`;

export const Input = styled.input`
    display: block;
    width: 80%;
    font-size: 1.4rem;
    border: none;
    border-bottom: 2px solid #ccc;
    margin: 7% 0;

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
    width: 100%;

    :hover {
        background-color: #0761a9f5
    }

    :focus {
        outline: 0;
    }

    @media(min-width: 800px) {
        width: 150px;
    }
`;