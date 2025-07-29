import axios from "axios"

const backendAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
})

// Thêm token tự động nếu có
backendAPI.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token') // hoặc từ Pinia, cookie
        const tokenType = localStorage.getItem('token_type')
        if (token) {
            config.headers.Authorization = `${tokenType} ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default backendAPI