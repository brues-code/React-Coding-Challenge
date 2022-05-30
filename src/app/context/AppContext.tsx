import React, { createContext, FC, useContext, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';

import { Locales, Cookies } from 'enums';
import { DEFAULT_LOCALE } from 'app/app-constants';
import { Fund } from 'types/fund';
import { Company } from 'types/company';
import { useRoutingParams } from 'app/hooks/use-routing-params';

import funds from 'mocks/funds.json';

import { useLocation, useParams } from 'react-router';
import { RouteParams } from '../../types/route-params';
import { useMatch } from 'react-router-dom';

interface State {
    funds: Fund[];
    selectedFund: Fund | null;
    selectedCompany: Company | null;
    currentLocale: Locales;
}

const initialState: State = {
    funds: [],
    selectedFund: null,
    selectedCompany: null,
    currentLocale: DEFAULT_LOCALE
};

export const AppContext = createContext(initialState);

const AppContextProvider: FC = ({ children }) => {
    const { fundId, companyId } = useRoutingParams();
    const [cookies] = useCookies();

    const [currentLocale] = useState(cookies[Cookies.LOCALE] || initialState.currentLocale);

    const selectedFund = useMemo(
        () =>
            (fundId &&
                funds.find(fund => {
                    return fund.id === Number(fundId);
                })) ||
            null,
        [fundId]
    );

    const selectedCompany = useMemo(
        () =>
            (companyId && selectedFund && selectedFund.companies.find(company => company.id === Number(companyId))) ||
            null,
        [selectedFund, companyId]
    );

    const contextState: State = useMemo(() => ({ funds, currentLocale, selectedFund, selectedCompany }), [
        currentLocale,
        selectedFund,
        selectedCompany
    ]);

    return <AppContext.Provider value={contextState}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
