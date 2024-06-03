import mongoose from "mongoose";
import { dbUri } from "../config";
import log from "../log";

declare global {
	// eslint-disable-next-line no-var
	var isConnected: boolean;
}

export class DatabaseManager {
	constructor(private uri: string) {
		this.uri = uri;
	}

	public async connect() {
		if (global.isConnected) {
			log.info("Using existing database connection");
			return;
		}

		const db = await mongoose
			.connect(this.uri)
			.then((db) => {
				log.info("Connected to MongoDB");
				return db;
			})
			.catch((err) => {
				log.error(`Error connecting to MongoDB: ${err}`);
				return err;
			});

		global.isConnected = db?.connections?.[0]?.readyState === 1 ?? false;
	}
}

export const db = new DatabaseManager(dbUri);
