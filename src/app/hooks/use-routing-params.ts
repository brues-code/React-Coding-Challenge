import { useMatch } from 'react-router-dom';

import { RouteParams } from 'types/route-params';
import { COMPANY, FUND } from '../route-paths';

export const useRoutingParams = (): RouteParams => {
    const companyPath = useMatch(COMPANY);
    const fundPath = useMatch(FUND);
    const matchPath = companyPath || fundPath;
    return matchPath ? (matchPath.params as RouteParams) : {};
};
