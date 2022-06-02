import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { FUND, COMPANY } from './route-paths';

import Providers from 'app/context/Providers';
import Dashboard from './Dashboard';
import Fund from './Fund';
import Company from './Company';

import './App.css';

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

const App = () => <Providers>{Routes()}</Providers>;

export default App;
