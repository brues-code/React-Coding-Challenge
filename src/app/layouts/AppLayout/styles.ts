import styled from 'styled-components';

import { SIDEBAR_WIDTH, TOPBAR_HEIGHT } from 'app/app-constants';

interface AppBodyContainerProps {
    sidebarVisible?: boolean;
}

export const AppContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    z-index: 1;
`;

export const AppBodyContainer = styled.div<AppBodyContainerProps>`
    position: absolute;
    top: ${TOPBAR_HEIGHT};
    width: calc(100% - ${props => (props.sidebarVisible ? SIDEBAR_WIDTH : '0px')});
    right: 0;
    z-index: 1;
    height: calc(100vh - ${TOPBAR_HEIGHT});
`;
