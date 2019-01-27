import styled from 'styled-components';

export const List = styled.div`
    grid-column: 1 / -1;
    border: 6px solid #000;
    background-color: #fff;
    padding: 1% 4%;

    @media(min-width: 800px) {
        grid-column: 7 / 10;
        border: 12px solid #000;
        padding: 3% 4%;
    }
`;

export const Title = styled.p`
    font-size: 2rem;
    font-weight: 900;
    color: #b01e25;
`;

export const Section = styled.section`
    height: 300px;
    box-sizing: border-box;
    padding: 3%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column
    justify-content: flex-start;
`;