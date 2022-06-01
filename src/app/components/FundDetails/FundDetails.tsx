import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { CardActions, CardContent, Typography } from '@material-ui/core';

import { generateUrl } from 'app/route-paths';
import { Fund } from 'types/fund';

import RouteLink from 'app/components/RouteLink';

import { FundCard } from './styles';

interface OwnProps {
    fund: Fund;
}

const FundDetails: FC<OwnProps> = ({ fund }) => {
    const { formatMessage } = useIntl();

    return (
        <FundCard key={fund.id}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {fund.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {formatMessage({ id: 'fundIndex.companies.number' }, { numberOfCompanies: fund.companies.length })}
                </Typography>
            </CardContent>
            <CardActions>
                <RouteLink to={generateUrl(fund.id)}>{formatMessage({ id: 'fundIndex.viewMore.link' })}</RouteLink>
            </CardActions>
        </FundCard>
    );
};

export default FundDetails;
