import * as React from 'react';

import Topbar from 'app/components/Topbar';
import Sidebar from 'app/components/Sidebar';

import { AppBodyContainer, AppContainer } from './styles';

export interface AppLayoutProps {
    renderSidebar?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, renderSidebar }) => {
    return (
        <>
            <Topbar />
            <AppContainer>
                {renderSidebar && <Sidebar />}
                <AppBodyContainer sidebarVisible={renderSidebar}>{children}</AppBodyContainer>
            </AppContainer>
        </>
    );
};

export default AppLayout;
