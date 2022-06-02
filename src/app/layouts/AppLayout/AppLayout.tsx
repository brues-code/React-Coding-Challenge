import React, { useMemo, FC } from 'react';

import { useApp } from 'app/context/AppContext';

import Topbar from 'app/components/Topbar';
import Sidebar from 'app/components/Sidebar';

import { AppBodyContainer, AppContainer } from './styles';

const AppLayout: FC = ({ children }) => {
    const { selectedFund, selectedCompany } = useApp();
    const renderSidebar = useMemo(() => Boolean(selectedFund), [selectedFund]);

    if (!selectedFund) {
        return null;
    }

    return (
        <>
            <Topbar />
            <AppContainer>
                {renderSidebar && <Sidebar selectedFund={selectedFund} selectedCompany={selectedCompany} />}
                <AppBodyContainer sidebarVisible={renderSidebar}>{children}</AppBodyContainer>
            </AppContainer>
        </>
    );
};

export default AppLayout;
