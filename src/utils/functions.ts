import toast from "react-hot-toast";

// function to implement a sleep function
export const sleep = (seconds: number) =>
	new Promise((resolve) => setTimeout(resolve, seconds * 1000));

// function to declare class names while using modular styling files
interface Styles {
	[key: string]: string;
}

export const stylesConfig =
	(styles: Styles, prefix = "") =>
	(...args: (string | { [key: string]: boolean })[]) => {
		const classes: string[] = [];
		args.forEach((arg) => {
			if (typeof arg === "string") {
				classes.push(styles[`${prefix}${arg}`]);
			} else if (typeof arg === "object") {
				Object.keys(arg).forEach((key) => {
					if (arg[key]) classes.push(styles[`${prefix}${key}`]);
				});
			}
		});
		return classes.join(" ");
	};

export const openLink = (link: string) => window.open(link, "_blank");

export const copyToClipboard = (text: string) =>
	navigator.clipboard.writeText(text);

// function to covert in lowercase, removing spaces, and removing special characters, uppercase to lowercase
export const slugify = (text: string) => {
	return text
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "-");
};

export const isValidURL = (url: string) => {
	const res = url.match(
		/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
	);
	return res !== null;
};

// debounce function for delaying function calls
type Func<T extends []> = (..._: T) => unknown;

export const debounce = <T extends []>(
	func: Func<T>,
	wait: number
): Func<T> => {
	let timeout: NodeJS.Timeout | null;

	return function executedFunction(...args: T) {
		const later = () => {
			timeout = null;
			func(...args);
		};

		clearTimeout(timeout as NodeJS.Timeout);
		timeout = setTimeout(later, wait);
	};
};

// intersection of 2 arrays
export const intersection = <T>(a: Array<T>, b: Array<T>) => {
	const s = new Set(b);
	return a.filter((x) => s.has(x));
};

// convert enumerated text to runnning text
export const enumToText = (text: string) => {
	return text
		.split("_")
		.map((word) => word[0] + word.slice(1).toLowerCase())
		.join(" ");
};

// function to check date format: UTC or Locale
export const checkDateFormat = (date: string): "utc" | "locale" => {
	if (date.includes("T") && date.includes("Z")) {
		return "utc";
	} else {
		return "locale";
	}
};

// function to switch date time between UTC and Locale
export const switchDateFormat = (
	date: string,
	from: "utc" | "locale",
	to: "utc" | "locale"
) => {
	if (from === "utc" && to === "locale") {
		const utcSeconds = new Date(date).getTime() / 1000;
		const isoLocal = new Date(
			utcSeconds * 1000 - new Date().getTimezoneOffset() * 60000
		)
			.toISOString()
			.slice(0, -1);
		return isoLocal;
	} else if (from === "locale" && to === "utc") {
		return new Date(date).toISOString();
	} else {
		return date;
	}
};

export const sanitizeTimestampToDate = (timestamp: string) => {
	return checkDateFormat(timestamp) === "utc"
		? switchDateFormat(timestamp, "utc", "locale").split("T")[0]
		: timestamp.split("T")[0];
};

export const generateRandomColor = () => {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// Notification utility based on toast
export const notify: {
	success: (_: string) => void;
	error: (_: any) => void;
	info: (_: string) => void;
	warn: (_: string) => void;
} = {
	success: (message: string) => {
		alert(message);
	},
	error: (error) => {
		if (typeof error === "string") {
			toast.error(error);
		} else if (error.message && typeof error.message === "string") {
			toast.error(error.message);
		} else {
			toast.error("An error occurred");
		}
	},
	info: (message: string) => {
		alert(message);
	},
	warn: (message: string) => {
		alert(message);
	},
};
