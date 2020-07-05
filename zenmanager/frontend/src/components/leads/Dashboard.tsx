import * as React from "react";
import { Typography } from "@material-ui/core";

import Leads from "./Leads";

import * as styles from "./Dashboard.module.css";

export const Dashboard = () => (
    <div className={styles.dashboard}>
        <Typography variant="h4">Dashboard1</Typography>
        <Leads />
    </div>
);
