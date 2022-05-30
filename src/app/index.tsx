import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppContextProvider from 'app/context/AppContext';

import { color } from 'styles/theme';
import { OutsideWrapper, MiddleWrapper, InnerContent } from './styles';

const Routes = () => {
    const ventureRoutes: RouteObject[] = ['/:ventureId', '/:ventureId/:companyId'].map(path => ({
        path,
        element: <>asd</>
    }));

    const routes: RouteObject[] = [
        {
            path: '/',
            element: <>123</>
        },
        ...ventureRoutes
    ];

    return useRoutes(routes);
};

const App = () => {
    return (
        <ThemeProvider theme={{ color }}>
            <AppContextProvider>
                <OutsideWrapper>
                    <MiddleWrapper>
                        <InnerContent>{Routes()}</InnerContent>
                    </MiddleWrapper>
                </OutsideWrapper>
            </AppContextProvider>
        </ThemeProvider>
    );
};

export default App;
