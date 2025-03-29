import dotenv from "dotenv";

dotenv.config();
const backendURL = import.meta.env.VITE_BE_URL;

export default backendURL;
