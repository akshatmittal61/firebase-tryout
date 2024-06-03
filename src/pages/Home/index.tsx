import React from "react";
import { stylesConfig } from "../../utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => {
	return <main className={classes("")}>HomePage</main>;
};

export default HomePage;
