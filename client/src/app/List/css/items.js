import styled from 'styled-components';

export const Items = styled.div`
    grid-column: 1 / -1;
    // Don't need it for rn.
    // background-color: #f5f3f3;
    
    @media(min-width: 800px) {
        // Making Items and Foods comp center.
        grid-column: 4 / 7;
        grid-row: 2 / -1;
        padding: 3% 4%;
        border: none;

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
    color: #fff;
    margin: 6.5% 0;
`;