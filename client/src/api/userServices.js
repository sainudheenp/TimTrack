import { apiClient } from "./apiClient";

export const getUserProfile = () => apiClient.get('/api/v1/user')