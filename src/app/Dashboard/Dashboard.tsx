import * as React from 'react';

import { useApp } from 'app/context/AppContext';
import { Fragment } from 'react';

const Dashboard: React.FC = () => {
    const { ventures } = useApp();
    return (
        <>
            {ventures.map(venture => {
                return <Fragment key={venture.id}>{venture.name}</Fragment>;
            })}
        </>
    );
};

export default Dashboard;
