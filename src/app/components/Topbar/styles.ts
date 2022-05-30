import styled from 'styled-components';
import { TOPBAR_HEIGHT } from 'app/app-constants';

export const TopbarContainer = styled.div`
    display: flex;
    z-index: 10;
    max-height: ${TOPBAR_HEIGHT};
    min-width: 100%;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    min-width: 100%;
    border-bottom: 1px solid black;
`;

export const AumniLogo = styled.img`
    width: 176px;
    height: ${TOPBAR_HEIGHT};
`;
