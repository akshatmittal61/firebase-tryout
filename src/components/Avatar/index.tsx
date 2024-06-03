import React from "react";
import { stylesConfig } from "../../utils/functions";
import styles from "./styles.module.scss";

interface IAvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	size: "small" | "medium" | "large" | number;
	src: string;
	alt: string;
}

const Avatar: React.FC<IAvatarProps> = ({
	size = "medium",
	src,
	alt,
	className,
	...props
}) => {
	const classNames = stylesConfig(styles);
	const getAvatarSize = () => {
		switch (size) {
			case "small":
				return 30;
			case "medium":
				return 50;
			case "large":
				return 100;
			default:
				return typeof size === "number" ? size : 50;
		}
	};

	return (
		<div
			className={classNames("avatar", className || "")}
			style={{
				width: getAvatarSize(),
				height: getAvatarSize(),
			}}
		>
			{src ? (
				<img
					src={src}
					alt={alt + ""}
					className={classNames("avatar-image")}
					{...props}
				/>
			) : (
				<div className={classNames("avatar-placeholder")}>
					<span>{alt ? alt[0] : "A"}</span>
				</div>
			)}
		</div>
	);
};

export default Avatar;
