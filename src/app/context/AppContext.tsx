import React, { createContext, FC, useContext, useMemo } from 'react';

interface State {}

interface ApiProps {}

type AppState = State & ApiProps;

const initialState: AppState = {};

export const AppContext = createContext(initialState);

const AppContextProvider: FC = ({ children }) => {
    const contextState: AppState = useMemo(() => ({}), []);

    return <AppContext.Provider value={contextState}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
