import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText, LinkProps, ListItemAvatar, Avatar, AvatarProps } from '@material-ui/core';

interface OwnProps extends Omit<LinkProps, 'ref'> {
    selected?: boolean;
    to: string;
    avatar?: AvatarProps;
}

const ListItemLink: FC<OwnProps> = ({ to, children, avatar, ...rest }) => (
    <ListItem button component={Link} to={to} {...rest}>
        {avatar && (
            <ListItemAvatar>
                <Avatar {...avatar} />
            </ListItemAvatar>
        )}
        <ListItemText>{children}</ListItemText>
    </ListItem>
);

export default ListItemLink;
