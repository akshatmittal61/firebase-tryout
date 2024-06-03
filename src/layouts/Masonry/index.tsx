import React from "react";
import { stylesConfig } from "../../utils/functions";
import styles from "./styles.module.scss";
const classes = stylesConfig(styles, "masonry");

interface IMasonry extends React.HTMLAttributes<HTMLDivElement> {
	xsm?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xlg?: number;
	className?: string;
	children: React.ReactNode;
}

const Masonry: React.FC<IMasonry> = ({
	xsm = 1,
	sm = 2,
	md = 3,
	lg = 4,
	xlg = 5,
	className,
	children,
}) => {
	return (
		<div
			className={
				classes(
					"",
					`-xsm-${xsm}`,
					`-sm-${sm}`,
					`-md-${md}`,
					`-lg-${lg}`,
					`-xlg-${xlg}`
				) + ` ${className}`
			}
		>
			{React.Children.map(children, (child, index) => {
				return (
					<div className={classes("-item")} key={index}>
						{child}
					</div>
				);
			})}
		</div>
	);
};

export default Masonry;
