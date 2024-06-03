import axios from "axios";
import { variables } from "../constants";

const http = axios.create({
	baseURL: variables.backendBaseUrl,
	headers: {
		"Content-Type": "application/json",
	},
});

export default http;
