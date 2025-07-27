import api from "@/plugin/api";
import { defineStore } from "pinia";

export const userStore = defineStore('user', {
    state: () => ({
        users: null,
    }),
    actions: {
        async fetchUsers(page = 1) {
            const perPage = 5
            const skip = (page - 1) * perPage

            const res = await api.get(`users?limit=${perPage}&skip=${skip}`)

            const total = res.data.total
            const users = res.data.users

            const paginationData = {
                current_page: page,
                data: users,
                total: total,
                per_page: perPage,
                last_page: Math.ceil(total / perPage),
                from: skip + 1,
                to: skip + users.length,
            }

            this.users = users
            return paginationData
        }
    }
})