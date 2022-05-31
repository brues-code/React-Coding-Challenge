import * as React from 'react';
import { useIntl } from 'react-intl';

import { FooterMessage, HeaderMessage, Page } from './styles';

const NotFound = () => {
    const { formatMessage } = useIntl();
    return (
        <Page>
            <HeaderMessage>404</HeaderMessage>
            <FooterMessage>{formatMessage({ id: '404.error.message' })}</FooterMessage>
        </Page>
    );
};

export default NotFound;
