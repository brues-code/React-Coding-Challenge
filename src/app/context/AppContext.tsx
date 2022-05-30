import React, { createContext, FC, useContext } from 'react';

import { Venture } from 'types/venture';

import funds from 'mocks/funds.json';

interface State {
    ventures: Venture[];
}

const initialState: State = {
    ventures: []
};

export const AppContext = createContext(initialState);

const AppContextProvider: FC = ({ children }) => {
    const contextState: State = { ventures: funds };

    return <AppContext.Provider value={contextState}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
