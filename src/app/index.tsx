import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

const Routes = () => {
    const routes: RouteObject[] = ['/', '/:ventureId', '/:ventureId/:companyId'].map(path => ({
        path,
        element: <>asd</>
    }));

    return useRoutes(routes);
};

const App: React.FC = () => {
    return (
        <>
            <div id="tooltip-root" />
            <div id="modal-root" />
            {Routes()}
        </>
    );
};

export default App;
