import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { generateUrl } from 'app/route-paths';
import { Fund } from 'types/fund';

import { useApp } from 'app/context/AppContext';
import RouteLink from 'app/components/RouteLink';

import { FundPaper } from './styles';

interface OwnProps {
    fund: Fund;
}

const FundDetails: FC<OwnProps> = ({ fund }) => {
    const { formatMessage } = useIntl();
    return (
        <FundPaper key={fund.id}>
            <RouteLink to={generateUrl(fund.id)}>{fund.name}</RouteLink>
        </FundPaper>
    );
};

export default FundDetails;
