import React from "react";
import { Typography } from "@material-ui/core";

import Leads from "./Leads";

import styles from "./Dashboard.module.css";

const Dashboard = () => (
    <div className={styles.dashboard}>
        <Typography variant="h4">Dashboard</Typography>
        <Leads />
    </div>
);

export default Dashboard;
