import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

interface Props {
    documentTitle?: string;
}

const SiteTitle: React.FC<Props> = ({ documentTitle }) => {
    const { formatMessage } = useIntl();
    const title = formatMessage({ id: documentTitle ? 'siteHeader' : 'default.document.title' }, { documentTitle });
    return <Helmet title={title} />;
};

export default SiteTitle;
