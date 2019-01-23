import styled from 'styled-components'

export const AppContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, auto);
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    padding: 2.5%;
    
    @media(min-width: 800px) {
        grid-template-rows: repeat(4, auto);
        padding: 0;
    }
`;