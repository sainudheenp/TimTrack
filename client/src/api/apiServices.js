//userServices.js
import { apiClient } from "./apiClient";


//User
export const getUserProfile = () => apiClient.get('/api/v1/user')

//Activity
export const getRecentActivity = () => apiClient.get('/api/v1/activity')
//create activity and todo
export const postActivity = (data) => apiClient.post('/api/v1/activity', data)

//weekly
export const getWeeklStats = () => apiClient.get('/api/v1/activity/weekStatus')

export const getDasboardData = () => apiClient.get("/api/v1/dashboard")

export const getAnalysisData = () => apiClient.get("/api/v1/analysis")

// ROOM
export const joinRoom = (data) => apiClient.post("/api/v1/room", data)

export const getRoomData = () => apiClient.get("/api/v1/room")

// TODO
export const getTodos = () => apiClient.get('/api/v1/activity/todo')

export const updateTodo = (data) => apiClient.put('/api/v1/activity/todo', data)

export const deleteTodo = (data) => apiClient.delete('/api/v1/activity/todo', data )
