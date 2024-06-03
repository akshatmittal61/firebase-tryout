import express, { Application, Request, Response, Router } from "express";
import { PORT } from "../../config";
import log from "../../log";

class Express {
	app: Application;
	constructor(routes: Router) {
		this.app = express();

		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));

		routes.get("/api/health", this.healthCheck.bind(this));

		this.app.use("/api/v1", routes);
	}

	healthCheck(_: Request, res: Response) {
		try {
			return res.status(200).json({
				message: "OK",
				timestamp: new Date().toISOString(),
				uptime: process.uptime(),
				identity: process.pid,
			});
		} catch (error) {
			return res.status(500).json({ message: error });
		}
	}

	init() {
		this.app.listen(PORT, () => {
			log.info(`Server is listening at http://localhost:${PORT}`);
		});
	}
}

export default Express;
