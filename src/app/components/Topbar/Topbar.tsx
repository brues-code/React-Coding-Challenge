import * as React from 'react';
import { useIntl } from 'react-intl';

import { HOME } from 'app/route-paths';

import FundSelector from 'app/components/FundSelector';

import logo from 'images/logo.png';
import { TopbarContainer, Header, AumniLogo, LogoLink, FundSelectorContainer } from './styles';

const Topbar: React.FC = () => {
    const { formatMessage } = useIntl();
    return (
        <TopbarContainer>
            <Header>
                <LogoLink to={HOME}>
                    <AumniLogo src={logo} alt={formatMessage({ id: 'aumni.logo.alt' })} />
                </LogoLink>
                <FundSelectorContainer>
                    <FundSelector />
                </FundSelectorContainer>
            </Header>
        </TopbarContainer>
    );
};

export default Topbar;
