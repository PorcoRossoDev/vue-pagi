import axios from "axios";

export default api = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}` // nếu có token
    },
    timeout: 10000,
})