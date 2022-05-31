import React, { FC, ReactNode, isValidElement, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarProps, LinkProps, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

interface OwnProps extends Omit<LinkProps, 'ref'> {
    avatar?: ReactNode | AvatarProps;
    selected?: boolean;
    to: string;
}

const ListItemLink: FC<OwnProps> = ({ to, children, avatar, ...rest }) => {
    const renderAvatar = useMemo(
        () =>
            avatar && (
                <ListItemAvatar>
                    {isValidElement(avatar) ? <Avatar>{avatar}</Avatar> : <Avatar {...(avatar as object)} />}
                </ListItemAvatar>
            ),
        [avatar]
    );

    return (
        <ListItem button component={Link} to={to} {...rest}>
            {renderAvatar}
            <ListItemText>{children}</ListItemText>
        </ListItem>
    );
};

export default ListItemLink;
