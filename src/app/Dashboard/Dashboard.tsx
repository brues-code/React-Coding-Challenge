import * as React from 'react';
import { useIntl } from 'react-intl';

import { useApp } from 'app/context/AppContext';
import SiteTitle from 'app/components/SiteTitle';

const Dashboard: React.FC = () => {
    const { funds } = useApp();
    const { formatMessage } = useIntl();
    return (
        <>
            <SiteTitle documentTitle={formatMessage({ id: 'index' })} />
            {funds.map(fund => (
                <React.Fragment key={fund.id}>{fund.name}</React.Fragment>
            ))}
        </>
    );
};

export default Dashboard;
