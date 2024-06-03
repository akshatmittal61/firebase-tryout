import React from "react";
import { IResponsive, IResponsiveCol, IResponsiveRow } from "./types";

const Row: React.FC<IResponsiveRow> = ({
	children,
	className,
	as = "div",
	...rest
}) => {
	const Component = as || "span";
	return (
		<Component className={`row ${className}`} {...rest}>
			{children}
		</Component>
	);
};

// use % to set width

const Col: React.FC<IResponsiveCol> = ({
	xlg = 100, // For extra large screens ( >= 1584px )
	lg = 100, // For large screens ( >= 1312px && < 1584px )
	md = 100, // For medium screens ( >= 1056px && < 1312px )
	sm = 100, // For small screens ( >= 672px && < 1056px )
	xsm = 100, // For extra small screens ( < 672px )
	className,
	children,
	as = "div",
	...rest
}) => {
	const Component = as || "span";
	return (
		<Component
			className={`col-xlg-${xlg} col-lg-${lg} col-md-${md} col-sm-${sm} col-xsm-${xsm} ${className}`}
			{...rest}
		>
			{children}
		</Component>
	);
};

const Responsive: IResponsive = {
	Row,
	Col,
};

Responsive.Row = Row;
Responsive.Col = Col;

export default Responsive;
