import * as React from "react";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";

export const Header = () => (
    <AppBar>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <Menu />
            </IconButton>
            <div>Zen</div>
            <Button color="inherit">
                <Link to="/login">Login</Link>
            </Button>
            <Button color="inherit">
                <Link to="/register">Register</Link>
            </Button>
        </Toolbar>
    </AppBar>
);
