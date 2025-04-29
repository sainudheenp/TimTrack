//userServices.js
import { apiClient } from "./apiClient";


//User
export const getUserProfile = () => apiClient.get('/api/v1/user')

//Activity
export const getRecentActivity = () => apiClient.get('/api/v1/activity')

//weekly
export const getWeeklStats = () => apiClient.get('/api/v1/activity/weekStatus')