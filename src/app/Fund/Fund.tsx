import React, { FC } from 'react';

import { useApp } from 'app/context/AppContext';
import SiteTitle from 'app/components/SiteTitle';
import NotFound from 'app/components/NotFound/NotFound';
import CompanyTable from '../components/CompanyTable';

const Fund: FC = () => {
    const { selectedFund } = useApp();

    if (!selectedFund) {
        return <NotFound />;
    }

    return (
        <>
            <SiteTitle documentTitle={selectedFund.name} />
            <CompanyTable fund={selectedFund} />
        </>
    );
};

export default Fund;
