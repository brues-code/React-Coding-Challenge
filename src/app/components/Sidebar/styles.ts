import styled from 'styled-components';

import { SIDEBAR_WIDTH, TOPBAR_HEIGHT } from 'app/app-constants';

export const SidebarContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: ${TOPBAR_HEIGHT};
    width: ${SIDEBAR_WIDTH};
    height: calc(100vh - ${TOPBAR_HEIGHT});
    z-index: 2;
    box-shadow: inset -1px 0 0 0 ${props => props.theme.color.$Navy_l4};
`;

export const MenuContainer = styled.div`
    padding: 16px 8px;
`;
