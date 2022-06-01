import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import SiteTitle from 'app/components/SiteTitle';
import FundIndex from 'app/components/FundIndex';

const Dashboard: FC = () => {
    const { formatMessage } = useIntl();
    return (
        <>
            <SiteTitle documentTitle={formatMessage({ id: 'index' })} />
            <FundIndex />
        </>
    );
};

export default Dashboard;
