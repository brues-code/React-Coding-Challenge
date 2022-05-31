import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText, LinkProps } from '@material-ui/core';

interface OwnProps extends Omit<LinkProps, 'ref'> {
    selected?: boolean;
    to: string;
}

const ListItemLink: FC<OwnProps> = ({ to, children, ...rest }) => (
    <ListItem button component={Link} to={to} {...rest}>
        <ListItemText>{children}</ListItemText>
    </ListItem>
);

export default ListItemLink;
