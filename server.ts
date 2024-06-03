import express from "express";
import { PORT } from "./config";
import log from "./log";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (_, res) => {
	return res.status(200).json({ message: "API is healthy" });
});

app.use("/api/v1", routes);

app.listen(PORT, () => {
	log.info(`Server is listening at http://localhost:${PORT}`);
});
