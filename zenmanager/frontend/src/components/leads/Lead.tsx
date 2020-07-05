import * as React from "react";
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    IconButton,
} from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons/";

import * as styles from "./Lead.module.css";

interface Props {
    id: string;
    name: string;
    email: string;
    message: string;
    onDelete: (id: string) => Promise<void>;
}

export const Lead = ({ id, name, email, message, onDelete }: Props) => (
    <Card className={styles.lead}>
        <CardContent>
            <Typography variant="h5">{name}</Typography>
            <Typography color="textSecondary">{email}</Typography>
            <Typography variant="body2">{message}</Typography>
        </CardContent>

        <CardActions>
            <IconButton color="secondary" onClick={() => onDelete(id)}>
                <DeleteForever />
            </IconButton>
        </CardActions>
    </Card>
);
