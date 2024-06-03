import React from "react";
import { Button, Typography } from "../../library";
import { stylesConfig } from "../../utils/functions";
import styles from "./styles.module.scss";

interface ErrorPageProps {
	title: string;
	description: string;
	button: {
		label: string;
		action: () => void;
	};
}

const classes = stylesConfig(styles, "error");

const Error: React.FC<ErrorPageProps> = ({ title, description, button }) => {
	return (
		<main className={classes("")}>
			<Typography
				as="h1"
				size="head-2"
				weight="bold"
				className={classes("-title")}
			>
				{title}
			</Typography>
			<Typography as="p" size="lg" className={classes("-description")}>
				{description}
			</Typography>
			<Button variant="filled" onClick={() => button.action()}>
				{button.label}
			</Button>
		</main>
	);
};

export default Error;
