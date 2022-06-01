import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { generateUrl } from 'app/route-paths';

import { useApp } from 'app/context/AppContext';
import RouteLink from 'app/components/RouteLink';
import FundDetails from 'app/components/FundDetails';

import { PaperContainer } from './styles';

const FundIndex: FC = () => {
    const { funds } = useApp();
    const { formatMessage } = useIntl();
    return (
        <PaperContainer>
            {funds.map(fund => (
                <FundDetails key={fund.id} fund={fund} />
            ))}
        </PaperContainer>
    );
};

export default FundIndex;
