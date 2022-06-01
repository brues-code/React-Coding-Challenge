import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

interface Props {
    documentTitle?: string;
}

const SiteTitle: React.FC<Props> = ({ documentTitle }) => {
    const { formatMessage } = useIntl();
    const title = useMemo(
        () => formatMessage({ id: documentTitle ? 'siteHeader' : 'default.document.title' }, { documentTitle }),
        [documentTitle, formatMessage]
    );
    return <Helmet title={title} />;
};

export default SiteTitle;
