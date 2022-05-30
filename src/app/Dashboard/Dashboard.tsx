import * as React from 'react';

import { useApp } from 'app/context/AppContext';
import SiteTitle from 'app/components/SiteTitle';

const Dashboard: React.FC = () => {
    const { ventures } = useApp();
    return (
        <>
            <SiteTitle />
            {ventures.map(venture => {
                return <React.Fragment key={venture.id}>{venture.name}</React.Fragment>;
            })}
        </>
    );
};

export default Dashboard;
