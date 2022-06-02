import React, { useMemo, FC } from 'react';
import { useIntl } from 'react-intl';
import { List } from '@material-ui/core';
import { MonetizationOn } from '@material-ui/icons';

import { Company } from 'types/company';
import { Fund } from 'types/fund';
import { generateUrl } from 'app/route-paths';

import ListItemLink from 'app/components/ListItemLink';

import { SidebarContainer } from './styles';

interface OwnProps {
    selectedCompany?: Company | null;
    selectedFund: Fund;
}

const Sidebar: FC<OwnProps> = ({ selectedCompany, selectedFund }) => {
    const { formatMessage } = useIntl();

    const renderFundLink = useMemo(
        () => (
            <ListItemLink
                avatar={<MonetizationOn />}
                key={selectedFund.name}
                selected={!selectedCompany}
                to={generateUrl(selectedFund.id)}
            >
                {formatMessage({ id: 'sidebar.fund.overview.link' })}
            </ListItemLink>
        ),
        [selectedFund, formatMessage, selectedCompany]
    );

    const renderFundCompanies = useMemo(
        () =>
            selectedFund!.companies.map(company => (
                <ListItemLink
                    key={company.id}
                    selected={selectedCompany?.id === company.id}
                    to={generateUrl(selectedFund!.id, company.id)}
                    avatar={{ alt: company.name, src: company.logo }}
                >
                    {company.name}
                </ListItemLink>
            )),
        [selectedFund, selectedCompany]
    );

    return (
        <SidebarContainer>
            <List disablePadding>
                {renderFundLink}
                {renderFundCompanies}
            </List>
        </SidebarContainer>
    );
};

export default Sidebar;
