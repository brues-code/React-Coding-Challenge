import React, { createContext, FC, useContext, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';

import { Fund } from 'types/fund';
import { Locales, Cookies } from 'enums';
import { DEFAULT_LOCALE } from 'app/app-constants';

import funds from 'mocks/funds.json';

interface State {
    funds: Fund[];
    currentLocale: Locales;
}

const initialState: State = {
    funds: [],
    currentLocale: DEFAULT_LOCALE
};

export const AppContext = createContext(initialState);

const AppContextProvider: FC = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [currentLocale, setCurrentLocale] = useState(cookies[Cookies.LOCALE] || initialState.currentLocale);
    const contextState: State = useMemo(() => ({ funds, currentLocale }), [currentLocale]);

    return <AppContext.Provider value={contextState}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
