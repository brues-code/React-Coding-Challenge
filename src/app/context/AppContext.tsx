import React, { createContext, FC, useContext, useMemo } from 'react';

import { Venture } from 'types/venture';

import funds from 'mocks/funds.json';

interface State {
    ventures: Venture[];
}

interface ApiProps {}

type AppState = State & ApiProps;

const initialState: AppState = {
    ventures: []
};

export const AppContext = createContext(initialState);

const AppContextProvider: FC = ({ children }) => {
    const contextState: AppState = useMemo(() => ({ ventures: funds }), []);

    return <AppContext.Provider value={contextState}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
