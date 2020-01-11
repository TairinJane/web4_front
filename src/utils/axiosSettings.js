import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:30080",
    responseType: "text",
    timeout: 10000,
    withCredentials: true,
});