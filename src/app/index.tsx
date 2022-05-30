import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import AppContextProvider from 'app/context/AppContext';

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
    return <AppContextProvider>{Routes()}</AppContextProvider>;
};

export default App;
