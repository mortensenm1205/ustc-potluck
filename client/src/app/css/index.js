import styled, { createGlobalStyle } from 'styled-components';

export const Base = createGlobalStyle`
    html {
        background: rgb(245,243,243);
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }
`;

export const AppContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-gap: 15px;
    padding: 2.5%;
    color: #626262;
    
    @media(min-width: 800px) {
        // Needing the rows to be fixed
        // For easier placement of comps.
        grid-template-rows: repeat(3, 100px);
        padding: 0;
    }
`;