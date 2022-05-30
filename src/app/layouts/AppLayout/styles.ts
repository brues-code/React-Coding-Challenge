import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    z-index: 1;
    @media (max-width: 768px) {
        display: block;
    }
`;

export const AppBodyContainer = styled.div`
    position: absolute;
    top: 48px;
    @media (min-width: 768px) {
        width: calc(100% - 56px);
        right: 0;
    }
    @media (max-width: 765px) {
        width: 100%;
    }
    z-index: 1;
    height: calc(100vh - 48px);
`;
