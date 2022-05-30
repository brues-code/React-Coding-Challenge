import * as React from 'react';
import { useIntl } from 'react-intl';

import { HOME } from 'app/route-paths';

import logo from 'images/logo.png';
import { TopbarContainer, Header, AumniLogo, LogoLink } from './styles';

const Topbar: React.FC = () => {
    const { formatMessage } = useIntl();
    return (
        <TopbarContainer>
            <Header>
                <LogoLink to={HOME}>
                    <AumniLogo src={logo} alt={formatMessage({ id: 'aumni.logo.alt' })} />
                </LogoLink>
            </Header>
        </TopbarContainer>
    );
};

export default Topbar;
