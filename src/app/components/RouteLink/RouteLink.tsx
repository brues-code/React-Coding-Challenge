import React, { FC } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { Link } from '@material-ui/core';

type OwnProps = Pick<LinkProps, 'to'>;

const RouteLink: FC<OwnProps> = ({ children, to }) => (
    <Link component={RouterLink} to={to}>
        {children}
    </Link>
);

export default RouteLink;
