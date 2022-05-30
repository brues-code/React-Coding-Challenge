import * as React from 'react';
import { useIntl } from 'react-intl';

import { useApp } from 'app/context/AppContext';
import SiteTitle from 'app/components/SiteTitle';

import logo from 'images/logo.png';
import { Header, AumniLogo } from './styles';

const Dashboard: React.FC = () => {
    const { funds } = useApp();
    const { formatMessage } = useIntl();
    return (
        <>
            <SiteTitle documentTitle={formatMessage({ id: 'index' })} />
            <Header>
                <AumniLogo src={logo} alt={formatMessage({ id: 'aumni.logo.alt' })} />
            </Header>
            {funds.map(fund => {
                return <React.Fragment key={fund.id}>{fund.name}</React.Fragment>;
            })}
        </>
    );
};

export default Dashboard;
