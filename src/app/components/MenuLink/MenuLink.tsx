import * as React from 'react';

interface MenuLinkProps {
    to: string;
}

import { NavLinkStyled, MenuLinkLabel } from './styles';

const MenuLink: React.FC<MenuLinkProps> = ({ to, children }) => {
    return (
        <NavLinkStyled to={to}>
            <MenuLinkLabel>{children}</MenuLinkLabel>
        </NavLinkStyled>
    );
};

export default MenuLink;
