import axios from "axios";
import { API_URL } from "./config";

const ayodaApi = axios.create({
    baseURL: API_URL
});

const api = {
    root: {
        get: () => ayodaApi.get("")
    }
};

export default api;

