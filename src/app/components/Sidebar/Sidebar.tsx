import * as React from 'react';

import MenuLink from 'app/components/MenuLink';

import { SidebarContainer, MenuContainer } from './styles';

const Sidebar: React.FC = () => {
    return (
        <SidebarContainer>
            <MenuContainer>
                <MenuLink to="/">Company 1</MenuLink>
                <MenuLink to="/">Company 2</MenuLink>
            </MenuContainer>
        </SidebarContainer>
    );
};

export default Sidebar;
