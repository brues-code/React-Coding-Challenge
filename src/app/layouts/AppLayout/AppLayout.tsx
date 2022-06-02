import React, { useMemo, FC } from 'react';

import { useApp } from 'app/context/AppContext';

import Topbar from 'app/components/Topbar';
import Sidebar from 'app/components/Sidebar';

import { AppBodyContainer, AppContainer } from './styles';

const AppLayout: FC = ({ children }) => {
    const { selectedFund, selectedCompany } = useApp();

    return (
        <>
            <Topbar />
            <AppContainer>
                {selectedFund && <Sidebar selectedFund={selectedFund} selectedCompany={selectedCompany} />}
                <AppBodyContainer sidebarVisible={Boolean(selectedFund)}>{children}</AppBodyContainer>
            </AppContainer>
        </>
    );
};

export default AppLayout;
