import dotenv from "dotenv";

dotenv.config();
const backendURL = String(process.env.BE_URL);

export default backendURL;