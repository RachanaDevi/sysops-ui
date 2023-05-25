import axios from "axios";
// set into environment variable
export const PRODUCT_SERVICE_BASE_URL = "http://localhost8083";

export const apiClient = axios.create();
