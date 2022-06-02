import React, { FC, useCallback, useMemo } from 'react';

import { Company } from 'types/company';

import { useApp } from 'app/context/AppContext';
import SiteTitle from 'app/components/SiteTitle';
import NotFound from 'app/components/NotFound/NotFound';

import { CompanyInfoContainer, DetailRow } from './styles';

const CompanyView: FC = () => {
    const { selectedCompany } = useApp();

    const renderCompanyLine = useCallback(
        (key: keyof Company) => selectedCompany && <DetailRow key={key}>{selectedCompany[key]}</DetailRow>,
        [selectedCompany]
    );

    const renderCompanyDetails = useMemo(() => {
        const companyKeys: Array<keyof Company> = ['name', 'founded', 'cost', 'impliedValue', 'ownershipPercentage'];
        return companyKeys.map(renderCompanyLine);
    }, [renderCompanyLine]);

    if (!selectedCompany) {
        return <NotFound />;
    }

    return (
        <>
            <SiteTitle documentTitle={selectedCompany.name} />
            <CompanyInfoContainer>{renderCompanyDetails}</CompanyInfoContainer>
        </>
    );
};

export default CompanyView;
