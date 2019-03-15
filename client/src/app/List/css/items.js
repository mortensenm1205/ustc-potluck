import styled from 'styled-components';

export const Items = styled.div`
    grid-column: 1 / -1;
    background-color: #fff;
    padding: 1% 4%;
    box-shadow: 3px 12px 32px -8px #000;
    
    @media(min-width: 800px) {
        // Making Items and Foods comp center.
        grid-column: 4 / 7;
        grid-row: 2 / -1;
        height: 375px;
        overflow-y: scroll;
        padding: 3% 4%;

        ::-webkit-scrollbar {
            width: 12px;
            background-color: #F5F5F5;
        }

        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: #F5F5F5;
        }
        ::-webkit-scrollbar-thumb {
            box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: #D62929;
        }
    }
`;

export const Title = styled.p`
    font-size: 2rem;
    font-weight: 900;
    color: #b01e25;
`;