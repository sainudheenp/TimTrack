const API_BASE = import.meta.env.VITE_API_URL;

const getToken = async () => localStorage.getItem('token')

const request = async (method, endpoint, data = null) => {
    const headers = {
        'Content-Type': 'application/json',
    }
    const token = await getToken();
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
        method,
        headers
    }

    if (data) {
        config.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_BASE}${endpoint}`, config)

    if (!response.ok) {
        const err = await response.json()
        console.log("API Error", err)
        throw new Error("API Error")
    }

    return response.json();
}

export const apiClient = {
    get: (endpoint) => request('GET', endpoint),
    post: (endpoint, data) => request('POST', endpoint, data),
    put: (endpoint, data) => request('PUT', endpoint, data),
    delete: (endpoint,data) => request('DELETE', endpoint,data)
}