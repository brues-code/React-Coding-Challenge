import React, { FC } from 'react';
import { IntlProvider } from 'react-intl';

import AppMessages from 'lib/i18n';

import { useApp } from 'app/context/AppContext';

const IntlContext: FC = ({ children }) => {
    const { currentLocale } = useApp();
    return (
        <IntlProvider locale={currentLocale} messages={AppMessages[currentLocale]}>
            {children}
        </IntlProvider>
    );
};

export default IntlContext;
