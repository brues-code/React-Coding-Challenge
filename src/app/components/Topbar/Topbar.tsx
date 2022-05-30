import * as React from 'react';
import { useIntl } from 'react-intl';

import logo from 'images/logo.png';
import { TopbarContainer, Header, AumniLogo } from './styles';

const Topbar: React.FC = () => {
    const { formatMessage } = useIntl();
    return (
        <TopbarContainer>
            <Header>
                <AumniLogo src={logo} alt={formatMessage({ id: 'aumni.logo.alt' })} />
            </Header>
        </TopbarContainer>
    );
};

export default Topbar;
