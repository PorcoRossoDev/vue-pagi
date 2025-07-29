import api from "@/plugin/api";
import backendAPI from "@/plugin/backendAPI";
import { defineStore } from "pinia";
import router from '@/router' // đường dẫn tới router/index.js

export const userStore = defineStore('user', {
    state: () => ({
        users: [],
        paginate: {
            per_page: 5,
            total: 20
        }
    }),
    actions: {
        async fetchUsers(page = 1) {
            const skip = (page - 1) * this.paginate.per_page
            const res = await api.get(`users?limit=${this.paginate.per_page}&skip=${skip}`)
            const total = res.data.total
            const users = res.data.users
            this.users = users
            this.paginate.total = res.data.total
        },
        async addUser (payload) {
            try {
                const res = await api.post('users/add', payload)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        },
        async login(payload) {
            try {
                const res = await backendAPI.post('login', payload)
                localStorage.setItem('access_token', res.access_token)
                localStorage.setItem('token_type', res.access_token)
                alert('Đăng nhập thành công!')
                router.push({name: 'dashboard'})
            } catch (error) {
                alert('Đăng nhập thất bại!')
                console.log(error)
            }
        }
    }
})