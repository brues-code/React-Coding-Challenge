import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppContextProvider from 'app/context/AppContext';
import IntlContext from 'app/context/IntlContext';

import Dashboard from './Dashboard';
import AppLayout from './layouts/AppLayout';

import './App.css';
import { color } from 'styles/theme';
import { OutsideWrapper, MiddleWrapper, InnerContent } from './styles';

const Routes = () => {
    const routes: RouteObject[] = [
        {
            index: true,
            element: (
                <AppLayout>
                    <Dashboard />
                </AppLayout>
            )
        },
        {
            path: '/:ventureId',
            element: (
                <AppLayout renderSidebar>
                    123
                </AppLayout>
            )
        },
        {
            path: '/:ventureId/:companyId',
            element: (
                <AppLayout renderSidebar>
                    asdasd
                </AppLayout>
            )
        }
    ];

    return useRoutes(routes);
};

const App = () => (
    <ThemeProvider theme={{ color }}>
        <AppContextProvider>
            <IntlContext>{Routes()}</IntlContext>
        </AppContextProvider>
    </ThemeProvider>
);

export default App;
