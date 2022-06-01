import React, { FC } from 'react';

import { useApp } from 'app/context/AppContext';
import SiteTitle from 'app/components/SiteTitle';
import NotFound from 'app/components/NotFound/NotFound';

const Company: FC = () => {
    const { funds, selectedCompany } = useApp();

    if (!selectedCompany) {
        return <NotFound />;
    }

    return (
        <>
            <SiteTitle documentTitle={selectedCompany.name} />
            {selectedCompany.name}
            {selectedCompany.founded}
            {selectedCompany.cost}
            {selectedCompany.impliedValue}
            {selectedCompany.ownershipPercentage}
        </>
    );
};

export default Company;
