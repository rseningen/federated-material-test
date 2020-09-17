import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link, Route, Switch} from 'react-router-dom';

// @material-ui
import {
    AppBar,
    Typography,
    makeStyles,
    Toolbar,
    List,
    IconButton,
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@material-ui/core';

import {Menu, ChevronLeft, ChevronRight} from '@material-ui/icons';

import Icon from '@material-ui/core/Icon';

MainMenu.propTypes = {
    children: PropTypes.node,
};
MainMenu.defaultProps = {
    children: null,
};


/**
 * This is the primary interface for navigation. Routes are displayed on the left in nested list
 * items. The header displays a route-related title. Route screens are displayed as children of
 * this view.
 */
export default function MainMenu(props) {
    const [open, setOpen] = useState(false);

    const [title, setTitle] = useState("Testing");

    useEffect(() => {
    });

    const routes = props.routes;

    function onMenuItemClick(route) {
        setOpen(!open)
    }

    function onDrawerClickAway() {
        setOpen(false);
    }

    function createIcon(icon){
        return React.createElement(icon);
    }

    return (
        <>
            <AppBar position="fixed" >
                <Toolbar variant="dense">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(!open)}
                        edge="start"
                        >
                        <Menu/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        color="inherit"
                    >
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                ModalProps={{ onBackdropClick: onDrawerClickAway }}
                open={open}>
                <Toolbar/>
                <div >
                    <div >
                        <IconButton
                            onClick={() => setOpen(!open)}
                        >
                        </IconButton>
                    </div>
                    <Divider/>
                    {routes && <List>
                        {routes.map((route) => {
                            if(route != undefined) {
                                return (
                                    route.showInMenu && <ListItem
                                        key={route.path}
                                        button component={Link} to={route.path} onClick={() => onMenuItemClick(route)}
                                    >
                                        {route.icon &&
                                        <ListItemIcon><Icon>{createIcon(route.icon)}</Icon></ListItemIcon>}
                                        <ListItemText key={route.path} primary={route.title}/>
                                    </ListItem>
                                )
                            }
                            else return <div/>
                        })}
                    </List>}
                </div>
            </Drawer>
        </>
    )
}
