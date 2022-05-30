import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import AppContextProvider from 'app/context/AppContext';

const Routes = () => {
    const routes: RouteObject[] = ['/', '/:ventureId', '/:ventureId/:companyId'].map(path => ({
        path,
        element: <>asd</>
    }));

    return useRoutes(routes);
};

const App = () => {
    return <AppContextProvider>{Routes()}</AppContextProvider>;
};

export default App;
