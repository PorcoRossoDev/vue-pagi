import api from "@/plugin/api";
import { defineStore } from "pinia";

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
                console.log(payload)
                const res = await api.post('users/add', payload)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
    }
})