import * as React from "react";

import * as styles from "./Page.module.css";

interface Props {
    children: React.ReactElement | string;
}

export const Page = ({ children }: Props) => (
    <section className={styles.page}>{children}</section>
);
