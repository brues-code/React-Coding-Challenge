import React, { useMemo } from 'react';

import { useApp } from 'app/context/AppContext';

import Topbar from 'app/components/Topbar';
import Sidebar from 'app/components/Sidebar';

import { AppBodyContainer, AppContainer } from './styles';

const AppLayout: React.FC = ({ children }) => {
    const { selectedFund } = useApp();
    const renderSidebar = useMemo(() => Boolean(selectedFund), [selectedFund]);
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
