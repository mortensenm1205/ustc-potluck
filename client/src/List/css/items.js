import styled from 'styled-components';

export const Items = styled.div`
    grid-column: 1 / -1;
    text-align: center;
    border: 2px solid;

    @media(min-width: 800px) {
        grid-column: 7 / 10;
        text-align: left;
    }
`;

export const Title = styled.p`
    font-size: 2rem;
    font-weight: 900;
`;