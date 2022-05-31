import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
    Avatar,
    AvatarProps,
    LinkProps,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';

interface OwnProps extends Omit<LinkProps, 'ref'> {
    avatar?: AvatarProps;
    icon?: ReactNode;
    selected?: boolean;
    to: string;
}

const ListItemLink: FC<OwnProps> = ({ to, children, avatar, icon, ...rest }) => (
    <ListItem button component={Link} to={to} {...rest}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        {avatar && (
            <ListItemAvatar>
                <Avatar {...avatar} />
            </ListItemAvatar>
        )}
        <ListItemText>{children}</ListItemText>
    </ListItem>
);

export default ListItemLink;
