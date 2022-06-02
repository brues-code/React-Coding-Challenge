import React, { ReactNode, FC } from 'react';
import { useIntl } from 'react-intl';

import { HOME } from 'app/route-paths';

import FundSelector from 'app/components/FundSelector';
import RouteLink from 'app/components/RouteLink';

import logo from 'images/logo.png';
import { TopbarContainer, Header, AumniLogo, LogoContainer } from './styles';

const Topbar = () => {
    const { formatMessage } = useIntl();
    return (
        <TopbarContainer>
            <Header>
                <LogoContainer>
                    <RouteLink to={HOME}>
                        <AumniLogo src={logo} alt={formatMessage({ id: 'aumni.logo.alt' })} />
                    </RouteLink>
                </LogoContainer>
                <FundSelector />
            </Header>
        </TopbarContainer>
    );
};

export default Topbar;
