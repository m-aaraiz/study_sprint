import axios from "axios";

/**
 * Creates an axios instance based of the configs
 * @author
 * @version
 */
const axiosInstance = axios.create({
  // URL from env file
  baseURL: import.meta.env.VITE_API_URL,
});

export default axiosInstance;
