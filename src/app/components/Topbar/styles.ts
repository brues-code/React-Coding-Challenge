import styled from 'styled-components';
import { SIDEBAR_WIDTH, TOPBAR_HEIGHT } from 'app/app-constants';

export const TopbarContainer = styled.div`
    z-index: 10;
    position: fixed;
    max-height: ${TOPBAR_HEIGHT};
    display: flex;
    min-width: 100%;
    box-shadow: inset 0 -1px 0 0 ${props => props.theme.color.$Navy_l4};
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    min-width: 100%;
`;

export const LogoContainer = styled.div`
    width: ${SIDEBAR_WIDTH};
    display: flex;
    justify-content: center;
`;

export const AumniLogo = styled.img`
    width: 176px;
    height: ${TOPBAR_HEIGHT};
`;
