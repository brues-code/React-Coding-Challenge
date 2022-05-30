import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)<NavLinkProps>`
    color: inherit;
    text-decoration: none;
    height: 32px;
    display: flex;
    align-items: center;
    padding: 0 10.5px;
    border-radius: 2px;
    margin: 4px 0;
    border: 1px solid black;
    &:first-of-type {
        margin-top: 0;
    }
    &:hover {
        background-color: rgba(255, 255, 255, 0.16);
    }
    &.active {
        background-color: rgba(255, 255, 255, 0.16);
    }
`;

export const MenuLinkLabel = styled.span`
    font-family: IBMPlexSans-Medium, sans-serif;
    font-size: 16px;
    line-height: 1.25;
    flex: 1;
`;
