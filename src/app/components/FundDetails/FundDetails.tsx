import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { generateUrl } from 'app/route-paths';
import { Fund } from 'types/fund';

import RouteLink from 'app/components/RouteLink';

import { FundPaper, DetailRow } from './styles';

interface OwnProps {
    fund: Fund;
}

const FundDetails: FC<OwnProps> = ({ fund }) => {
    const { formatMessage } = useIntl();
    return (
        <FundPaper key={fund.id}>
            <RouteLink to={generateUrl(fund.id)}>{fund.name}</RouteLink>
            <DetailRow>
                {formatMessage({ id: 'fundIndex.companies.number' }, { numberOfCompanies: fund.companies.length })}
            </DetailRow>
        </FundPaper>
    );
};

export default FundDetails;
