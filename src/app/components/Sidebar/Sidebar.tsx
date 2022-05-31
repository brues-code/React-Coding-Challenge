import React, { useMemo, FC } from 'react';
import { useIntl } from 'react-intl';
import { List } from '@material-ui/core';

import { generateUrl } from 'app/route-paths';

import { useApp } from 'app/context/AppContext';
import ListItemLink from 'app/components/ListItemLink';

import { SidebarContainer } from './styles';

const Sidebar: FC = () => {
    const { selectedCompany, selectedFund } = useApp();
    const { formatMessage } = useIntl();

    const renderFundLink = useMemo(
        () => (
            <ListItemLink key={selectedFund!.name} selected={!selectedCompany} to={generateUrl(selectedFund!.id)}>
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
                    selected={Boolean(selectedCompany?.id === company.id)}
                    to={generateUrl(selectedFund!.id, company.id)}
                >
                    {company.name}
                </ListItemLink>
            )),
        [selectedFund, selectedCompany]
    );

    return (
        <SidebarContainer>
            <List>
                {renderFundLink}
                {renderFundCompanies}
            </List>
        </SidebarContainer>
    );
};

export default Sidebar;
