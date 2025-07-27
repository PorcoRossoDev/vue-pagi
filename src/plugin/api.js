import axios from "axios";

const api = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}` // nếu có token
    },
    timeout: 10000,
})

export default api