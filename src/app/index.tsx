import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { FUND, COMPANY } from './route-paths';

import Providers from 'app/context/Providers';
import Dashboard from './Dashboard';
import Fund from './Fund';
import CompanyView from './CompanyView';

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
            element: <CompanyView />
        }
    ];

    return useRoutes(routes);
};

const App = () => <Providers>{Routes()}</Providers>;

export default App;
