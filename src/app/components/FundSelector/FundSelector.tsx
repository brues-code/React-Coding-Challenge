import React, { FC, useCallback, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { generateUrl, HOME } from 'app/route-paths';

import Dropdown from 'app/components/Dropdown';
import { useApp } from 'app/context/AppContext';

const FundSelector: FC = () => {
    const { formatMessage } = useIntl();
    const { funds, selectedFund } = useApp();
    const navigate = useNavigate();

    const fundOptions = useMemo(() => funds.map(fund => ({ value: fund.id, label: fund.name })), [funds]);

    const handleChange = useCallback((id: string) => navigate(generateUrl(id ? id : HOME)), [navigate]);

    return (
        <Dropdown
            displayEmpty
            onChange={e => handleChange(String(e.target.value))}
            options={fundOptions}
            placeholder={formatMessage({ id: 'fundSelector.dropdown.placeholder' })}
            selectedOption={selectedFund?.id || ''}
        />
    );
};

export default FundSelector;
