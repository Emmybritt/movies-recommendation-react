import axios from "axios";

export const myAxios = axios.create({
	baseURL: "https://movies-node-api.onrender.com/api/v1",
	withCredentials: true,
});
