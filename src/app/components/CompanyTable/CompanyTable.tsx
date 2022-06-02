import React, { FC, useCallback, useMemo } from 'react';
import { useIntl } from 'react-intl';
import MaterialTable, { Column } from 'material-table';

import { Company } from 'types/company';
import { Fund } from 'types/fund';
import { generateUrl } from 'app/route-paths';

import RouteLink from 'app/components/RouteLink';

interface OwnProps {
    fund: Fund;
}

const roundToNearestTenth = (value: number) => Math.round(10 * value) / 10;

const TableColumns = (fund: Fund): Array<Column<Company>> => {
    const { formatMessage, formatNumber, formatDate } = useIntl();

    const formatCurrency = useCallback(
        (value: number) => formatNumber(value, { style: 'currency', currency: 'USD' }),
        [formatNumber]
    );

    return useMemo(
        (): Array<Column<Company>> => [
            {
                title: formatMessage({ id: 'companyTable.header.company' }),
                field: 'name',
                render: company => <RouteLink to={generateUrl(fund.id, company.id)}>{company.name}</RouteLink>
            },
            {
                title: formatMessage({ id: 'companyTable.header.ownershipPercentage' }),
                field: 'ownershipPercentage',
                render: company =>
                    formatNumber(company.ownershipPercentage, {
                        style: 'percent',
                        maximumFractionDigits: 2
                    })
            },
            {
                title: formatMessage({ id: 'companyTable.header.cost' }),
                field: 'cost',
                render: company => formatCurrency(company.cost)
            },
            {
                title: formatMessage({ id: 'companyTable.header.impliedValue' }),
                field: 'impliedValue',
                render: company => formatCurrency(company.impliedValue)
            },
            {
                title: formatMessage({ id: 'companyTable.header.multiple' }),
                field: 'multiple',
                render: company => roundToNearestTenth(company.impliedValue / company.cost),
                customSort: (rowA, rowB) => {
                    const rowAMultiple = rowA.impliedValue / rowA.cost;
                    const rowBMultiple = rowB.impliedValue / rowB.cost;
                    if (rowAMultiple > rowBMultiple) {
                        return 1;
                    } else if (rowAMultiple < rowBMultiple) {
                        return -1;
                    }
                    return 0;
                }
            },
            {
                title: formatMessage({ id: 'companyTable.header.founded' }),
                field: 'founded',
                render: company => formatDate(company.founded)
            }
        ],
        [formatMessage, formatCurrency, formatDate, formatNumber, fund.id]
    );
};

const CompanyTable: FC<OwnProps> = ({ fund }) => {
    return (
        // @ts-ignore
        <MaterialTable
            title={fund.name}
            columns={TableColumns(fund)}
            data={fund.companies}
            options={{
                paging: false,
                search: false,
                header: true
            }}
        />
    );
};

export default CompanyTable;
