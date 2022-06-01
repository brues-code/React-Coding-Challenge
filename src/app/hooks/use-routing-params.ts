import { useLocation, matchPath } from 'react-router-dom';

import { RouteParams } from 'types/route-params';
import { COMPANY, FUND } from '../route-paths';

export const useRoutingParams = (): RouteParams => {
    const { pathname } = useLocation();
    const matchedPath = matchPath(COMPANY, pathname) || matchPath(FUND, pathname);
    return matchedPath ? matchedPath.params : {};
};
