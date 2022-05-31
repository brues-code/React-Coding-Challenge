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
            {funds.map(fund => (
                <React.Fragment key={fund.id}>{fund.name}</React.Fragment>
            ))}
        </>
    );
};

export default Company;
