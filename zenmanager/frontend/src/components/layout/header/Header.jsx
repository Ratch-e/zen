import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./Header.module.css";

const Header = () => (
    <AppBar>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <div>Zen</div>
        </Toolbar>
    </AppBar>
);

export default Header;
