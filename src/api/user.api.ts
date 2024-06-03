import { User } from "../types/user";
import http from "../utils/http";

export const getUserDetails = async (
	username: string
): Promise<{ message: string; data: User }> => {
	const res = await http.get(`/users/${username}`);
	return res.data;
};
