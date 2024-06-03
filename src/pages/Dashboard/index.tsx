import React from "react";
import { stylesConfig } from "../../utils/functions";
import styles from "./styles.module.scss";
import { Typography } from "../../library";

interface IDashboardPageProps {
	name: string;
}

const classes = stylesConfig(styles, "dashboard-page");

const DashboardPage: React.FC<IDashboardPageProps> = ({ name }) => {
	return (
		<main className={classes("")}>
			<Typography>{name}&apos; Dashboard</Typography>
		</main>
	);
};

export default DashboardPage;
