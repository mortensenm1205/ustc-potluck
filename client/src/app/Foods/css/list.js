import styled from 'styled-components';

export const List = styled.div`
    grid-column: 1 / -1;

    @media(min-width: 800px) {
        // Making comp center alongside Items
        grid-column: 7 / 10;
        grid-row: 2 / -1;
        padding: 3% 4%;
    }
`;

export const Title = styled.p`
    font-size: 2rem;
    font-weight: 900;
    color: #fff;
    margin: 6.5% 0;
`;

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column
    box-sizing: border-box;
    padding: 3%;
    background-color: #fff;
    box-shadow: -19px 20px 74px -26px rgba(0,0,0,0.75);
`;