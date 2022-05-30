import React, { createContext, FC, useContext, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';

import { Venture } from 'types/venture';
import { Locales, Cookies } from 'enums';
import { DEFAULT_LOCALE } from 'app/app-constants';

import funds from 'mocks/funds.json';

interface State {
    ventures: Venture[];
    currentLocale: Locales;
}

const initialState: State = {
    ventures: [],
    currentLocale: DEFAULT_LOCALE
};

export const AppContext = createContext(initialState);

const AppContextProvider: FC = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [currentLocale, setCurrentLocale] = useState(cookies[Cookies.LOCALE] || initialState.currentLocale);
    const contextState: State = useMemo(() => ({ ventures: funds, currentLocale }), [currentLocale]);

    return <AppContext.Provider value={contextState}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
