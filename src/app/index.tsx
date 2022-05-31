import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { FUND, COMPANY } from './route-paths';

import AppContextProvider from 'app/context/AppContext';
import IntlContext from 'app/context/IntlContext';
import Dashboard from './Dashboard';
import Fund from './Fund';
import Company from './Company';
import AppLayout from './layouts/AppLayout';

import './App.css';
import { color } from 'styles/theme';

const Routes = () => {
    const routes: RouteObject[] = [
        {
            index: true,
            element: <Dashboard />
        },
        {
            path: FUND,
            element: <Fund />
        },
        {
            path: COMPANY,
            element: <Company />
        }
    ];

    return useRoutes(routes);
};

const App = () => (
    <ThemeProvider theme={{ color }}>
        <AppContextProvider>
            <IntlContext>
                <AppLayout>{Routes()}</AppLayout>
            </IntlContext>
        </AppContextProvider>
    </ThemeProvider>
);

export default App;
