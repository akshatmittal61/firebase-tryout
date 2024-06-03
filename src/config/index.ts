export const url: Record<"frontend" | "backend", string> = {
	frontend:
		process.env.REACT_APP_FRONTEND_BASE_URL || "http://localhost:3000",
	backend: process.env.REACT_APP_BACKEND_BASE_URL || "http://localhost:8000",
};
