import styled from 'styled-components';
import { TOPBAR_HEIGHT } from 'app/app-constants';
import { NavLink, NavLinkProps } from 'react-router-dom';

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

export const LogoLink = styled(NavLink)<NavLinkProps>`
    width: 176px;
    height: ${TOPBAR_HEIGHT};
`;

export const AumniLogo = styled.img`
    width: 100%;
    height: 100%;
`;
