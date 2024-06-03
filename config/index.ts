import { config } from "dotenv";
import { getBoolean, getNumber, getString } from "../utils/safety";

config();

class ConfigService {
	constructor(private env: { [k: string]: string | undefined }) {
		this.env = env;
	}

	public get(key: string): string {
		if (!this.env[key]) {
			throw new Error(`Key ${key} not found in environment`);
		}

		return getString(this.env[key]);
	}

	public getNumber(key: string): number {
		const value = this.env[key];
		if (!value) {
			throw new Error(`Key ${key} not found in environment`);
		}

		return getNumber(this.env[key]);
	}

	public getBoolean(key: string): boolean {
		const value = this.env[key];
		if (!value) {
			throw new Error(`Key ${key} not found in environment`);
		}

		return getBoolean(this.env[key]);
	}

	public safeGet<T>(extractor: () => T, fallback: T): T {
		try {
			return extractor();
		} catch {
			return fallback;
		}
	}
}

const configService = new ConfigService(process.env);

export default configService;

export const PORT = configService.safeGet(() => getNumber("PORT"), 8000);

export type FIREBASE_CONFIG =
	| "apiKey"
	| "authDomain"
	| "projectId"
	| "storageBucket"
	| "messagingSenderId"
	| "appId";
export const firebaseConfig: Record<FIREBASE_CONFIG, string> = {
	apiKey: configService.get("FIREBASE_API_KEY"),
	authDomain: configService.get("FIREBASE_AUTH_DOMAIN"),
	projectId: configService.get("FIREBASE_PROJECT_ID"),
	storageBucket: configService.get("FIREBASE_STORAGE_BUCKET"),
	messagingSenderId: configService.get("FIREBASE_MESSAGING_SENDER_ID"),
	appId: configService.get("FIREBASE_APP_ID"),
};
