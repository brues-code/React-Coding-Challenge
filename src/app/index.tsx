import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppContextProvider from 'app/context/AppContext';

import { color } from 'styles/theme';

const Routes = () => {
    const ventureRoutes: RouteObject[] = ['/:ventureId', '/:ventureId/:companyId'].map(path => ({
        path,
        element: <div>asd</div>
    }));

    const routes: RouteObject[] = [
        {
            path: '/',
            element: <div>123</div>
        },
        ...ventureRoutes
    ];

    return useRoutes(routes);
};

const App = () => {
    return (
        <ThemeProvider theme={{ color }}>
            <AppContextProvider>{Routes()}</AppContextProvider>
        </ThemeProvider>
    );
};

export default App;
