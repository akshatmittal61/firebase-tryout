import React from "react";

export interface IResponsiveRow extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
	as?: React.ElementType;
}

export interface IResponsiveCol extends React.HTMLAttributes<HTMLDivElement> {
	xlg?: number;
	lg?: number;
	md?: number;
	sm?: number;
	xsm?: number;
	children: React.ReactNode;
	as?: React.ElementType;
}

export interface IResponsive {
	Row: React.FC<IResponsiveRow>;
	Col: React.FC<IResponsiveCol>;
}
