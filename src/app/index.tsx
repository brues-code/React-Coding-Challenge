import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import AppContextProvider from 'app/context/AppContext';

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
    return <AppContextProvider>{Routes()}</AppContextProvider>;
};

export default App;
