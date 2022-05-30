import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppContextProvider from 'app/context/AppContext';
import IntlContext from 'app/context/IntlContext';

import Dashboard from './Dashboard';
import AppLayout from './layouts/AppLayout';

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
            element: <>1</>
        },
        {
            path: '/:ventureId/:companyId',
            element: <>2</>
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
