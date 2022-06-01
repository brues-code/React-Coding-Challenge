import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { generateUrl } from 'app/route-paths';

import { useApp } from 'app/context/AppContext';
import RouteLink from 'app/components/RouteLink';

import { FundPaper, PaperContainer } from './styles';

const FundIndex: FC = () => {
    const { funds } = useApp();
    const { formatMessage } = useIntl();
    return (
        <PaperContainer>
            {funds.map(fund => (
                <FundPaper key={fund.id}>
                    <RouteLink to={generateUrl(fund.id)}>{fund.name}</RouteLink>
                </FundPaper>
            ))}
        </PaperContainer>
    );
};

export default FundIndex;
