import React, { FC } from 'react';

import { useApp } from 'app/context/AppContext';
import SiteTitle from 'app/components/SiteTitle';
import NotFound from 'app/components/NotFound/NotFound';

const Fund: FC = () => {
    const { selectedFund } = useApp();

    if (!selectedFund) {
        return <NotFound />;
    }

    return (
        <>
            <SiteTitle documentTitle={selectedFund.name} />
            {selectedFund.companies.map(company => (
                <React.Fragment key={company.id}>{company.name}</React.Fragment>
            ))}
        </>
    );
};

export default Fund;
