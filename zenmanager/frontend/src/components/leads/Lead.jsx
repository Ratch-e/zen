import React from "react";
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    IconButton,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import styles from "./Lead.module.css";

export const Lead = ({ id, name, email, message, onDelete }) => {
    return (
        <Card className={styles.lead}>
            <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography color="textSecondary">{email}</Typography>
                <Typography variant="body2">{message}</Typography>
            </CardContent>
            <CardActions>
                <IconButton color="secondary" onClick={() => onDelete(id)}>
                    <DeleteForeverIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Lead;
