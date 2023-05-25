
import { apiClient } from './helper';

const PRODUCT_SERVICE_BASE_URL = "http://localhost:8083/products";

export const getCategories = async () => {
    const response = await apiClient.get(`${PRODUCT_SERVICE_BASE_URL}/categories`);
    return response.data;
}