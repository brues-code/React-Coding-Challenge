import React, { FC, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

import AppMessages from 'lib/i18n';

import { useApp } from 'app/context/AppContext';

interface OwnProps {
    children?: ReactNode;
}

const IntlContext: FC<OwnProps> = ({ children }) => {
    const { currentLocale } = useApp();
    return (
        <IntlProvider locale={currentLocale} messages={AppMessages[currentLocale]}>
            {children}
        </IntlProvider>
    );
};

export default IntlContext;
