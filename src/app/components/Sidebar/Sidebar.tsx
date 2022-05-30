import * as React from 'react';

import MenuLink from 'app/components/MenuLink';

import { SidebarContainer, MenuContainer } from './styles';

const Sidebar: React.FC = () => {
    return (
        <SidebarContainer>
            <MenuContainer>
                <MenuLink to="/">Home</MenuLink>
            </MenuContainer>
        </SidebarContainer>
    );
};

export default Sidebar;
