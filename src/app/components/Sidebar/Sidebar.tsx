import React, { useCallback, useMemo } from 'react';

import { Company } from 'types/company';
import { generateUrl } from 'app/route-paths';

import { useApp } from 'app/context/AppContext';
import MenuLink from 'app/components/MenuLink';

import { SidebarContainer, MenuContainer } from './styles';

const Sidebar: React.FC = () => {
    const { selectedCompany, selectedFund } = useApp();

    const renderMenuLink = useCallback(
        (company: Company) =>
            selectedFund && (
                <MenuLink key={company.id} to={generateUrl(selectedFund.id, company.id)}>
                    {company.name}
                </MenuLink>
            ),
        [selectedFund]
    );

    const renderFundCompanies = useMemo(() => selectedFund && selectedFund.companies.map(renderMenuLink), [
        selectedFund,
        renderMenuLink
    ]);

    return (
        <SidebarContainer>
            <MenuContainer>{renderFundCompanies}</MenuContainer>
        </SidebarContainer>
    );
};

export default Sidebar;
