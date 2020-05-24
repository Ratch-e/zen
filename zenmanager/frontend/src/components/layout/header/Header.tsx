import * as React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

export const Header = () => (
    <AppBar>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <Menu />
            </IconButton>
            <div>Zen</div>
        </Toolbar>
    </AppBar>
);
