import React, { FC } from 'react';

import { useApp } from 'app/context/AppContext';
import FundDetails from 'app/components/FundDetails';

import { PaperContainer } from './styles';

const FundIndex: FC = () => {
    const { funds } = useApp();
    return (
        <PaperContainer>
            {funds.map(fund => (
                <FundDetails key={fund.id} fund={fund} />
            ))}
        </PaperContainer>
    );
};

export default FundIndex;
